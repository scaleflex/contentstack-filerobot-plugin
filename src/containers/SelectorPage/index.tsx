import React, { useEffect, useState, useRef } from "react";
import SelectorPageUtils from "../../common/utils/SelectorPageUtils";
import rootConfig from "../../root_config";
import { TypeErrorFn } from "../../common/types/types";
import Explorer from '@filerobot/explorer'
import Filerobot from '@filerobot/core'
import XHRUpload from '@filerobot/xhr-upload'
import "@filerobot/core/dist/style.min.css";
import "@filerobot/explorer/dist/style.min.css";
import { isEmpty, isArray } from "lodash";

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
    ''
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
    errorText = 'errorText',
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
    console.log(data);
    if (data?.config) {
      if (
        data?.message === "init" &&
        data?.type === rootConfig?.damEnv?.DAM_APP_NAME
      ) {
          // const container = data?.config?.["container"] || "";
          // const securityTemplateId = data?.config?.["security_template_id"] || "";
          
          const container = "try";
          const securityTemplateId = "SECU_B05FA1C3BA7A4BA88975CE2DC05CAF28";
          filerobot.current = Filerobot({
            securityTemplateId: securityTemplateId,
            container: container,
            dev: false,
          })
          .use(Explorer, {
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
          })
          .use(XHRUpload) 
          .on('export', function (files, popupExportSuccessMsgFn, downloadFilesPackagedFn, downloadFileFn) {  
            successFn(files)
          });
      
          setConfig(data?.config);
          compactViewImplementation(data?.config, data?.selectedIds);
          setSelectedAssetIds(data?.selectedIds);
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
        className="selector_container mt-30 mr-20 ml-20 mb-20"
        id="selector_container"
        data-testid="selector-container"
        ref={damContainer}
      >
        {isErrorPresent ? (
          <div className="info-wrapper" data-testid="warning-component">
            isErrorPresent
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
