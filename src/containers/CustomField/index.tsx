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

// Traverse content type schema to find the static path to a field UID
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

// Traverse entry data using the template path to locate the exact path with indices.
const matchTemplatePath = (
  current: any,
  template: string[],
  targetValue: any,
  currentPath: string[] = [],
  templateIndex: number = 0
): string[] | null => {
  if (templateIndex >= template.length) {
    const isEmptyTarget = targetValue === undefined || targetValue === null || (Array.isArray(targetValue) && targetValue.length === 0);
    const isEmptyCurrent = current === undefined || current === null || (Array.isArray(current) && current.length === 0);
    if (isEmptyTarget && isEmptyCurrent) {
      return currentPath;
    }
    if (JSON.stringify(current) === JSON.stringify(targetValue)) {
      return currentPath;
    }
    return null;
  }

  const expectedKey = template[templateIndex];
  const isLastSegment = templateIndex === template.length - 1;

  if (current && typeof current === 'object') {
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        const item = current[i];
        if (item && typeof item === 'object' && expectedKey in item) {
          const found = matchTemplatePath(
            item[expectedKey],
            template,
            targetValue,
            [...currentPath, String(i), expectedKey],
            templateIndex + 1
          );
          if (found) return found;
        } else {
          const found = matchTemplatePath(
            item,
            template,
            targetValue,
            [...currentPath, String(i)],
            templateIndex
          );
          if (found) return found;
        }
      }
    } else {
      if (isLastSegment) {
        if (expectedKey in current) {
          const val = current[expectedKey];
          const isEmptyTarget = targetValue === undefined || targetValue === null || (Array.isArray(targetValue) && targetValue.length === 0);
          const isEmptyCurrent = val === undefined || val === null || (Array.isArray(val) && val.length === 0);
          if ((isEmptyTarget && isEmptyCurrent) || JSON.stringify(val) === JSON.stringify(targetValue)) {
            return [...currentPath, expectedKey];
          }
        } else {
          const isEmptyTarget = targetValue === undefined || targetValue === null || (Array.isArray(targetValue) && targetValue.length === 0);
          if (isEmptyTarget) {
            return [...currentPath, expectedKey];
          }
        }
      } else if (expectedKey in current) {
        return matchTemplatePath(
          current[expectedKey],
          template,
          targetValue,
          [...currentPath, expectedKey],
          templateIndex + 1
        );
      }
    }
  }

  return null;
};

// Resolve the dotted path with indices dynamically
const getFieldPath = (field: any, entry: any): string => {
  const sdkPath = field?.schema?.$uid || field?.uid;
  if (!sdkPath) return '';

  const segments = sdkPath.split('.');
  const hasIndex = segments.some((segment: string) => !isNaN(Number(segment)));
  if (hasIndex) {
    return sdkPath;
  }

  // Find template path (either sdkPath split by dot, or traversed from content_type schema)
  let templatePath = segments;
  if (!field?.schema?.$uid) {
    const schema = entry?.content_type?.schema;
    if (schema) {
      const foundPath = findFieldPath(schema, field.uid);
      if (foundPath) {
        templatePath = foundPath;
      }
    }
  }

  const entryData = entry.getData() || {};
  const initialValue = field.getData();

  const resolvedPath = matchTemplatePath(entryData, templatePath, initialValue);
  if (resolvedPath) {
    return resolvedPath.join('.');
  }

  return sdkPath;
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

      const entry = state?.location?.entry;
      const field = state?.location?.field;
      if (field) {
        if (entry) {
          const dottedPath = getFieldPath(field, entry);
          if (dottedPath) {
            field.uid = dottedPath;
          }
        }
        field._self = true;
        field.setData(selectedAssets).catch((err: any) => {
          // If the error is "Target window is closed", it is a harmless side-effect
          // of Contentstack attempting to notify a closed/unmounted sidebar widget.
          // The data itself has already been successfully committed to the field.
          if (err?.message?.includes('Target window is closed') || err?.toString()?.includes('Target window is closed')) {
            return;
          }

          // Log other errors for diagnostic purposes
          console.error("Contentstack App SDK: field.setData error:", err);
        });
      }
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
