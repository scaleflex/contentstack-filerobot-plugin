/* Import React modules */
import React, { useCallback, useContext, useState } from "react";
/* Import ContentStack modules */
import { Button, Notification, Tooltip } from "@contentstack/venus-components";
/* Import our CSS */
import "./styles.css";
/* Import our modules */
import localeTexts from "../../common/locales/en-us";
import CustomFieldUtils from "../../common/utils/CustomFieldUtils";
import AssetContainer from "./AssetContainer";
import rootConfig from "../../root_config/index";
import WarningMessage from "../../components/WarningMessage";
import {AppFailed} from "../../components/AppFailed";
import { MarketplaceAppContext } from "../../common/contexts/MarketplaceAppContext";
import CustomFieldContext from "../../common/contexts/CustomFieldContext";
import { TypeErrorFn } from "../../common/types/types";
import constants from "../../common/constants";

/* To add any labels / captions for fields or any inputs, use common/local/en-us/index.ts */

// Traverse content type schema to find the path to a field UID (handles global fields / groups / modular blocks)
const findFieldPath = (schema: any[], targetUid: string, path: string[] = []): string[] | null => {
  for (const f of schema ?? []) {
    if (f.uid === targetUid) return [...path, f.uid];
    if (Array.isArray(f.schema)) {
      const found = findFieldPath(f.schema, targetUid, [...path, f.uid]);
      if (found) return found;
    }
    if (Array.isArray(f.blocks)) {
      for (const block of f.blocks) {
        if (Array.isArray(block.schema)) {
          const found = findFieldPath(block.schema, targetUid, [...path, f.uid, block.uid]);
          if (found) return found;
        }
      }
    }
  }
  return null;
};

const setValueAtPath = (obj: any, path: string[], value: any) => {
  let current = obj;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    const nextKey = path[i + 1];
    const isNextKeyIndex = !isNaN(Number(nextKey));
    if (current[key] === undefined) {
      current[key] = isNextKeyIndex ? [] : {};
    }
    current = current[key];
  }
  if (current && typeof current === "object") {
    current[path[path.length - 1]] = value;
  }
};

const CustomField: React.FC = function () {
  const { appFailed } = useContext(MarketplaceAppContext);
  const {
    renderAssets,
    setRenderAssets,
    selectedAssets,
    setSelectedAssets,
    uniqueID,
    state,
    currentLocale,
    handleBtnDisable,
    isBtnDisable,
  } = useContext(CustomFieldContext);

  // state for checking if error is present
  const [isError, setIsError] = React.useState<boolean>(false);
  // state for selected asset Ids received from selector page
  const [selectedAssetIds, setSelectedAssetIds] = useState<string[]>([]);
  // state for warning message to be displayed on error
  const [warningText, setWarningText] = useState<string>(
    localeTexts.Warnings.incorrectConfig
  );
  // window variable for selector page
  let selectorPageWindow: any;

  // save data of "selectedAssets" state in contentstack when updated
  React.useEffect(() => {
    if (selectedAssets) {
      setRenderAssets(rootConfig?.filterAssetData?.(selectedAssets));
      setSelectedAssetIds(selectedAssets?.map((item) => item?.file?.[uniqueID]));
      state?.location?.field?.setData(selectedAssets).catch(() => {
        // field.setData() fails when the custom field is inside a Global Field or Modular Block because
        // the SDK validates the field path locally against the content type schema.
        // Fallback: use entry.setData() which delegates directly to the host bridge,
        // bypassing local validation. We rebuild the nested path from the field schema/uid or content type schema.
        const entry = state?.location?.entry;
        const field = state?.location?.field;
        if (!entry || !field) return;

        // Try getting the dotted path from the SDK schema/field first
        const sdkPath = field.schema?.$uid || field.uid;
        let path: string[] | null = null;
        
        if (sdkPath && sdkPath.includes('.')) {
          path = sdkPath.split('.');
        } else {
          // Fall back to searching schema if the sdk path is not dotted
          const schema = (entry as any)?.content_type?.schema;
          if (schema) {
            path = findFieldPath(schema, field.uid);
          }
        }

        if (!path?.length) return;
        
        // Update the entry data at the specified path and set it
        const entryData = entry.getData() || {};
        const rootKey = path[0];
        const isNextKeyIndex = path[1] !== undefined && !isNaN(Number(path[1]));

        if (path.length === 1) {
          entry.setData({ [rootKey]: selectedAssets }).catch(() => {});
        } else {
          // Deep copy the root field's value to avoid mutating the entry object directly
          const rootValue = entryData[rootKey]
            ? JSON.parse(JSON.stringify(entryData[rootKey]))
            : (isNextKeyIndex ? [] : {});
            
          setValueAtPath(rootValue, path.slice(1), selectedAssets);
          entry.setData({ [rootKey]: rootValue }).catch(() => {});
        }
      });
    }
  }, [
    selectedAssets, // Your Custom Field State Data
  ]);

  const handleUniqueSelectedData = (dataArr: any[]) => {
    if (dataArr?.length) {
      const assetLimit = state?.contentTypeConfig?.advanced?.max_limit;
      let finalAssets = CustomFieldUtils.uniqBy(
        [...selectedAssets, ...dataArr],
        'link'
      );

      if (assetLimit && finalAssets?.length > assetLimit) {
        finalAssets = finalAssets?.slice(0, assetLimit);
        Notification({
          displayContent: {
            error: {
              error_message:
                localeTexts.CustomFields.assetLimit.notificationMsg,
            },
          },
          notifyProps: {
            hideProgressBar: true,
          },
          type: "error",
        });
      }
      if (finalAssets?.length) {
        setSelectedAssets(finalAssets); // selectedAssets is array of assets selected in selectorpage
        handleBtnDisable(
          finalAssets,
          state?.contentTypeConfig?.advanced?.max_limit
        );
      }
    }
  };

  // returns final config values from app_config and custom_field_config
  const getConfig = () => {
    const configObj =
      rootConfig?.handleConfigtoSelectorPage?.(
        state?.config,
        state?.contentTypeConfig,
        currentLocale
      ) || {};
    if (Object.keys(configObj)?.length) return configObj;
    return state?.config;
  };

  // handle message event for selector window
  const handleMessage = (event: MessageEvent) => {
    if (selectorPageWindow) {
      const dataArr: Array<any> = rootConfig?.handleSelectorPageData?.(event);
      handleUniqueSelectedData(dataArr);
    }
  };

  // function to set error
  const setError = ({
    isErr = false,
    errorText = localeTexts.Warnings.incorrectConfig,
  }: TypeErrorFn) => {
    setIsError(isErr);
    if (errorText) setWarningText(errorText);
  };

  // function called on postmessage from selector page. used in "novalue" option
  const saveData = useCallback(
    (event: any) => {
      const { data } = event;
      if (data?.message === "openedReady") {
        event?.source?.postMessage(
          {
            message: "init",
            config: getConfig(),
            type: rootConfig.damEnv.DAM_APP_NAME,
            selectedIds: selectedAssetIds,
          },
          `${process.env.REACT_APP_CUSTOM_FIELD_URL}/#/selector-page`
        );
      } else if (
        data?.message === "add" &&
        data?.type === rootConfig.damEnv.DAM_APP_NAME &&
        data?.selectedAssets?.length
      ) {
        const assets = data?.selectedAssets;
        if (state?.config?.is_custom_json) {
          const keys = CustomFieldUtils.extractKeys(state?.config?.dam_keys);
          const assetData = CustomFieldUtils.getFilteredAssets(assets, keys);
          handleUniqueSelectedData(assetData);
        } else {
          handleUniqueSelectedData(assets);
        }
      }
    },
    [selectedAssets, state?.config]
  );

  // function called onClick of "add asset" button. Handles opening of modal and selector window
  const openDAMSelectorPage = useCallback(() => {
    if (state?.appSdkInitialized) {
      if (rootConfig?.damEnv?.DIRECT_SELECTOR_PAGE === "novalue") {
        CustomFieldUtils.popupWindow({
          url: `${process.env.REACT_APP_CUSTOM_FIELD_URL}/#/selector-page?location=CUSTOM-FIELD`,
          title: localeTexts.SelectorPage.title,
          w: 1500,
          h: 800,
        });
        window.addEventListener("message", saveData, false);
      } else {
        if (rootConfig?.damEnv?.DIRECT_SELECTOR_PAGE === "window") {
          rootConfig?.handleSelectorWindow?.(
            state?.config,
            state?.contentTypeConfig,
            setError
          );
        } else {
          const url = rootConfig?.getSelectorWindowUrl?.(
            state?.config,
            state?.contentTypeConfig
          );
          selectorPageWindow = CustomFieldUtils.popupWindow({
            url,
            title: `${localeTexts.SelectorPage.title}`,
            w: 1500, // You Change These According To Your App
            h: 800, // You Change These According To Your App
          });
        }
        window.addEventListener("message", handleMessage, false);
      }
    } else selectorPageWindow?.focus();
  }, [
    state,
    state?.appSdkInitialized,
    state?.config,
    state?.contentTypeConfig,
    saveData,
  ]);

  return (
    <div className="field-extension-wrapper">
      <div className="field-extension">
        {appFailed ? (
          <AppFailed />
        ) : (
          <div className="field-wrapper" data-testid="field-wrapper">
            {!isError ? (
              <>
                {renderAssets?.length ? (
                  <AssetContainer />
                ) : (
                  <div className="no-asset" data-testid="noAsset-div">
                    {localeTexts.CustomFields.AssetNotAddedText}
                  </div>
                )}
                <Tooltip
                  content={localeTexts.CustomFields.assetLimit.btnTooltip}
                  position="top"
                  disabled={!isBtnDisable}
                  style={constants.constantStyles.addBtnTooltip}
                >
                  <Button
                    buttonType="control"
                    className="add-asset-btn"
                    version="v2"
                    onClick={openDAMSelectorPage}
                    data-testid="add-btn"
                    disabled={isBtnDisable}
                  >
                    {localeTexts.CustomFields.button.btnText}
                  </Button>
                </Tooltip>
              </>
            ) : (
              <div data-testid="warning-component">
                <WarningMessage content={warningText} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomField;
