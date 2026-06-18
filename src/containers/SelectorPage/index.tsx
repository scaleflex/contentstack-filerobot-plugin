import React, { useEffect, useState, useRef, useCallback } from "react";
import rootConfig from "../../root_config";
import { v4 } from "uuid";
import WarningMessage from "../../components/WarningMessage";
import { AssetPicker } from "@scaleflex/asset-picker/react";
import type { Asset } from "@scaleflex/asset-picker/dist/types/asset.types";
import localeTexts from "../../common/locales/en-us/index";
import { isEmpty } from "lodash";
import "./style.css";

let url: string = "";

const SelectorPage: React.FC<any> = function () {
  const [isErrorPresent, setIsErrorPresent] = useState<boolean>(false);
  const [pickerConfig, setPickerConfig] = useState<any>(null);
  const [warningText] = useState<string>(localeTexts.Warnings.incorrectConfig);
  const attributesRef = useRef<string>("");

  const handleSelect = useCallback((assets: Asset[]) => {
    const attrs = attributesRef.current;
    const fileArr = assets.map((asset) => {
      const customData: Record<string, any> = {};
      if (attrs) {
        attrs.split(",").forEach((attr: string) => {
          const key = attr.trim();
          customData[key] = (asset as any)[key] ?? (asset.meta as any)?.[key];
        });
      }
      return {
        link: asset.url?.cdn || asset.url?.public || "",
        file: {
          name: asset.name,
          uuid: asset.uuid,
          uid: v4().split("-").join(""),
          type: asset.type,
          info: {
            img_w: asset.info?.img_w,
            img_h: asset.info?.img_h,
          },
          size: {
            bytes: asset.size?.bytes,
          },
          ...customData,
        },
      };
    });

    window.opener.postMessage(
      { message: "add", selectedAssets: fileArr, type: rootConfig?.damEnv?.DAM_APP_NAME },
      url
    );
    window.close();
  }, []);

  const handleMessage = useCallback((event: MessageEvent) => {
    const { data } = event;
    if (
      data?.config &&
      data?.message === "init" &&
      data?.type === rootConfig?.damEnv?.DAM_APP_NAME
    ) {
      const container = data.config?.["container"] || "";
      const securityTemplateId = data.config?.["security_template_id"] || "";
      const attrs = data.config?.["attributes"] || "";

      if (isEmpty(container) || isEmpty(securityTemplateId)) {
        setIsErrorPresent(true);
      } else {
        attributesRef.current = attrs;
        setPickerConfig({
          auth: {
            mode: "securityTemplate" as const,
            securityTemplateKey: securityTemplateId,
            projectToken: container,
          },
          displayMode: "inline" as const,
          multiSelect: true,
        });
      }
    }
  }, []);

  useEffect(() => {
    const { opener: windowOpener } = window;
    if (!windowOpener) return;

    const queryString = window.location.href?.split("?")?.[1]?.split("=")?.[1];
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
  }, [handleMessage]);

  return (
    <div className="selector-page-wrapper" data-testid="selector-wrapper">
      <div
        className="selector-page-header flex FullPage_Modal_Header"
        data-testid="selector-header"
      >
        <div>
          <div className="selector-page-header-image" data-testid="selector-logo">
            <img
              src={rootConfig?.damEnv?.SELECTOR_PAGE_LOGO}
              alt={`${localeTexts.SelectorPage.title} Logo`}
            />
          </div>
          <span data-testid="selector-title">{localeTexts.SelectorPage.title}</span>
        </div>
      </div>
      <div
        className="selector_container"
        id="selector_container"
        data-testid="selector-container"
      >
        {isErrorPresent ? (
          <div className="info-wrapper" data-testid="warning-component">
            <WarningMessage content={warningText} />
          </div>
        ) : pickerConfig ? (
          <AssetPicker
            config={pickerConfig}
            open={true}
            onSelect={handleSelect}
            onCancel={() => window.close()}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SelectorPage;
