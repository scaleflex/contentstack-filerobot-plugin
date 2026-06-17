import React, { useEffect, useState, useRef } from "react";
import SelectorPageUtils from "../../common/utils/SelectorPageUtils";
import rootConfig from "../../root_config";
import { v4 } from "uuid";
import { TypeErrorFn } from "../../common/types/types";
import WarningMessage from "../../components/WarningMessage";
import Explorer from '@scaleflex/widget-explorer';
import ScaleflexWidget from '@scaleflex/widget-core'
import XHRUpload from '@scaleflex/widget-xhr-upload'
import localeTexts from "../../common/locales/en-us/index";
import { isEmpty, isNull } from "lodash";
import "./style.css";
import "@scaleflex/widget-core/dist/style.min.css";
import "@scaleflex/widget-explorer/dist/style.min.css";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ExploreView = require('@scaleflex/widget-explorer/lib/components/ExploreView').default as any;

let isScriptLoaded: any = false;
let url: string = "";
const SelectorPage: React.FC<any> = function () {
  const filerobot = useRef<any>(null);
  // state of isError flag
  const [isErrorPresent, setIsErrorPresent] = React.useState<boolean>(false);
  // config in selector page
  const [config, setConfig] = useState<any>();
  // state for warning text to be used when error
  const [warningText, setWarningText] = useState<string>(
    localeTexts.Warnings.incorrectConfig
  );
  const [selectedAssetIds, setSelectedAssetIds] = useState<string[]>([]);
  const damContainer = useRef(null);

  // function to check null or missing values of config
  const checkConfigValues = (configParams: any) => {
    const configFieldsLength = rootConfig?.damEnv?.CONFIG_FIELDS?.length;
    for (let i = 0; i < configFieldsLength; i += 1) {
      if (!configParams[rootConfig?.damEnv?.CONFIG_FIELDS?.[i]]) {
        return true;
      }
    }
    return false;
  };

  // function to set error
  const setError = ({
    isErr = false,
    errorText = localeTexts.Warnings.incorrectConfig,
  }: TypeErrorFn) => {
    setIsErrorPresent(isErr);
    if (errorText) setWarningText(errorText);
  };

  const successFn = (assets: any[]) => {
    window.opener.postMessage(
      {
        message: "add",
        selectedAssets: assets,
        type: rootConfig?.damEnv?.DAM_APP_NAME,
      },
      url
    );
    window.close();
  };

  const closeFn = () => window.close();

  // function to load dam script and mount component
  const compactViewImplementation = async (
    configParams: any,
    selectedIds: string[]
  ) => {
    if (rootConfig?.damEnv?.IS_DAM_SCRIPT) {
      isScriptLoaded = await SelectorPageUtils.loadDAMScript(
        rootConfig?.damEnv?.DAM_SCRIPT_URL as string
      );
      if (isScriptLoaded === true) {
        // condition's for checking config variable's
        if (checkConfigValues(configParams)) {
          setIsErrorPresent(true);
          return;
        }
        setIsErrorPresent(false);
        rootConfig?.openComptactView?.(
          configParams,
          selectedIds,
          successFn,
          closeFn,
          {
            containerRef: damContainer,
            containerClass: "selector_container",
            containerId: "selector_container",
          },
          setError
        );
      }
    }
  };
  const handleMessage = (event: MessageEvent) => {
    const { data } = event;
    if (data?.config) {
      if (
        data?.message === "init" &&
        data?.type === rootConfig?.damEnv?.DAM_APP_NAME
      ) {
        const container = data?.config?.["container"] || "";
        const securityTemplateId = data?.config?.["security_template_id"] || "";
        const attributes = data?.config?.["attributes"] || "";


        if (isEmpty(container) || isEmpty(securityTemplateId)) {
          setIsErrorPresent(true)
        } else {
          filerobot.current = ScaleflexWidget({
            securityTemplateId: securityTemplateId,
            container: container,
            dev: false,
          })
            .use(Explorer as any, {
              config: {
                limit: 50,
                tagging: {
                  language: "en",
                  confidence: 60,
                  limit: 10,
                }
              },
              target: "#filerobot-widget",
              inline: true,
              width: "100%",
              height: "100%",
              dismissUrlPathQueryUpdate: true,
              showDetailsView: false,
              showFolderTree: true,
              floaty: false,
              disableDownloadButton: true,
              hideDownloadButtonIcon: true,
              preventDownloadDefaultBehavior: true,
              resetAfterClose: true,
              // reference https://github.com/scaleflex/commercetools-filerobot-plugin/blob/master/src/components/filerobot/filerobot-dam.jsx
              locale: {
                strings: {
                  mutualizedExportButtonLabel: 'Insert',
                  mutualizedDownloadButton: 'Insert',
                }
              },
              ExploreViewComponent: ExploreView,
            } as any)
            .use(XHRUpload as any)
            .on('export', function (files: any[], popupExportSuccessMsgFn: any, downloadFilesPackagedFn: any, downloadFileFn: any) {
              const fileArr: any[] = []
              files.forEach((selected: any) => {
                const customData: Record<string, any> = {};
                if (attributes) {
                  attributes.split(",").forEach((attr: string) => {
                    const key = attr.trim();
                    customData[key] = selected.file[key];
                  })
                }
                const storeData = {
                  link: selected.link,
                  file: {
                    name: selected.file.name,
                    uuid: selected.file.uuid,
                    uid: v4()?.split("-")?.join(""),
                    type: selected.file.type,
                    info: {
                      img_w: selected.file.info.img_w,
                      img_h: selected.file.info.img_h,
                    },
                    size: {
                      bytes: selected.file.size.bytes
                    },
                    ...customData
                  }
                }
                fileArr.push(storeData)
              })
              successFn(fileArr)
            });

          setConfig(data?.config);
          compactViewImplementation(data?.config, data?.selectedIds);
          setSelectedAssetIds(data?.selectedIds);
        }
      }
    }
  };

  useEffect(() => {
    const { opener: windowOpener } = window;
    if (windowOpener) {
      const queryString = window.location.href
        ?.split("?")?.[1]
        ?.split("=")?.[1];
      let postMessageUrl: string;
      switch (queryString) {
        case "NA":
          postMessageUrl = process.env.REACT_APP_UI_URL_NA ?? "";
          break;
        case "EU":
          postMessageUrl = process.env.REACT_APP_UI_URL_EU ?? "";
          break;
        case "AZURE_NA":
          postMessageUrl = process.env.REACT_APP_UI_URL_AZURE_NA ?? "";
          break;
        case "CUSTOM-FIELD":
          postMessageUrl = process.env.REACT_APP_CUSTOM_FIELD_URL ?? "";
          break;
        default:
          postMessageUrl = process.env.REACT_APP_UI_URL_AZURE_EU ?? "";
      }
      url = postMessageUrl;
      window.addEventListener("message", handleMessage, false);
      windowOpener.postMessage({ message: "openedReady" }, postMessageUrl);
      window.addEventListener("beforeunload", () => {
        windowOpener.postMessage({ message: "close" }, postMessageUrl);
      });
    }
  }, []);

  return (
    <div className="selector-page-wrapper" data-testid="selector-wrapper">
      <div
        className="selector-page-header flex FullPage_Modal_Header"
        data-testid="selector-header"
      >
        <div>
          <div
            className="selector-page-header-image"
            data-testid="selector-logo"
          >
            <img
              src={rootConfig?.damEnv?.SELECTOR_PAGE_LOGO}
              alt={`${localeTexts.SelectorPage.title} Logo`}
            />
          </div>
          <span data-testid="selector-title">
            {localeTexts.SelectorPage.title}
          </span>
        </div>
      </div>
      <div
        className="selector_container mt-30 mr-20 ml-20 mb-20"
        id="selector_container"
        data-testid="selector-container"
        ref={damContainer}
      >
        {isErrorPresent ? (
          <div className="info-wrapper" data-testid="warning-component">
            <WarningMessage content={warningText} />
          </div>
        ) : (
          // eslint-disable-next-line
          <>
            {rootConfig?.damEnv?.IS_DAM_SCRIPT ? (
              // If Compact view script avaialble
              // eslint-disable-next-line
              <div id="filerobot-widget"></div>
            ) : (
              // If there is no script custom component will be added
              //   rootConfig?.customSelectorComponent?.(
              //     config,
              //     setError,
              //     successFn,
              //     closeFn,
              //     selectedAssetIds
              //   )
              <div id="filerobot-widget"></div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SelectorPage;
