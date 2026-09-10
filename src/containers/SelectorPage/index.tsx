import React, { useEffect, useState, useRef, useCallback } from "react";
import rootConfig from "../../root_config";
import { v4 } from "uuid";
import WarningMessage from "../../components/WarningMessage";
import HubLoginPage from "../../components/HubLoginPage";
import HubAuthUtils, { HubAuthData } from "../../common/utils/HubAuthUtils";
import { AssetPicker } from "@scaleflex/asset-picker/react";
import type { Asset } from "@scaleflex/asset-picker/dist/types/asset.types";
import localeTexts from "../../common/locales/en-us/index";
import { isEmpty } from "lodash";
import "./style.css";

let url: string = "";

// parses a user-supplied JSON config string (from assetPickerConfig/uploaderConfig),
// falling back to {} and logging on invalid JSON rather than breaking the picker
const parseJsonConfig = (raw: unknown, label: string): Record<string, any> => {
  if (typeof raw !== "string" || raw.trim() === "") return {};
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error(`${label}: invalid JSON`, e);
    return {};
  }
};

// shared picker options, layered on top of the resolved auth config, then overridden by
// the org/field-level assetPickerConfig and (for the uploader block specifically) uploaderConfig
const buildPickerConfig = (
  auth: any,
  assetPickerConfig?: Record<string, any>,
  uploaderConfig?: Record<string, any>
) => {
  const config: any = {
    displayMode: "inline" as const,
    multiSelect: true,
    uploader: {
      showFillMetadata: true,
      metadataConfig: {
        enforceRequiredBeforeUpload: 'auto',
      },
    },
    rememberLastTab: true,
    rememberLastFolder: true,
    rememberLastView: true,
    folderCreation: true,
    ...assetPickerConfig,
  };

  // uploaderConfig is dedicated to the uploader, so it wins over anything set via assetPickerConfig;
  // auth is always the resolved value so it can't be clobbered by either JSON override
  config.uploader = {
    ...config.uploader,
    ...uploaderConfig,
  };
  config.auth = auth;

  return config;
};

const SelectorPage: React.FC<any> = function () {
  const [isErrorPresent, setIsErrorPresent] = useState<boolean>(false);
  const [pickerConfig, setPickerConfig] = useState<any>(null);
  const [isPickerReady, setIsPickerReady] = useState<boolean>(false);
  const [showHubLogin, setShowHubLogin] = useState<boolean>(false);
  const [warningText] = useState<string>(localeTexts.Warnings.incorrectConfig);
  const attributesRef = useRef<string>("");
  const assetPickerConfigRef = useRef<Record<string, any>>({});
  const uploaderConfigRef = useRef<Record<string, any>>({});

  useEffect(() => {
    customElements.whenDefined('sfx-asset-picker').then(() => setIsPickerReady(true));
  }, []);

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

  // fetches the session's current (backend-renewed) SASS key from the plugins-oauth2
  // backend, which keeps it fresh server-to-server; only falls back to the login screen
  // if the backend no longer has this session (never registered, or pruned as unusable)
  const handleHubAuthFlow = useCallback(async () => {
    const stored = HubAuthUtils.getStoredHubAuth();
    if (stored) {
      const current = await HubAuthUtils.fetchCurrentHubSession(stored.sessionUuid);
      if (current) {
        HubAuthUtils.saveHubAuth(current);
        setPickerConfig(
          buildPickerConfig(
            {
              mode: "sassKey" as const,
              sassKey: current.sassKey,
              projectToken: current.token,
            },
            assetPickerConfigRef.current,
            uploaderConfigRef.current
          )
        );
        return;
      }

      HubAuthUtils.clearHubAuth();
    }
    setShowHubLogin(true);
  }, []);

  const handleHubLoginSuccess = useCallback(async (data: HubAuthData) => {
    await HubAuthUtils.registerHubSession(data);
    HubAuthUtils.saveHubAuth(data);
    setShowHubLogin(false);
    setPickerConfig(
      buildPickerConfig(
        {
          mode: "sassKey" as const,
          sassKey: data.sassKey,
          projectToken: data.token,
        },
        assetPickerConfigRef.current,
        uploaderConfigRef.current
      )
    );
  }, []);

  const handleMessage = useCallback((event: MessageEvent) => {
    const { data } = event;
    if (
      data?.config &&
      data?.message === "init" &&
      data?.type === rootConfig?.damEnv?.DAM_APP_NAME
    ) {
      const attrs = data.config?.["attributes"] || "";
      attributesRef.current = attrs;
      assetPickerConfigRef.current = parseJsonConfig(data.config?.["assetPickerConfig"], "assetPickerConfig");
      uploaderConfigRef.current = parseJsonConfig(data.config?.["uploaderConfig"], "uploaderConfig");

      if (data.config?.["auth_method"] === "login_hub") {
        handleHubAuthFlow();
        return;
      }

      const container = data.config?.["container"] || "";
      const securityTemplateId = data.config?.["security_template_id"] || "";

      if (isEmpty(container) || isEmpty(securityTemplateId)) {
        setIsErrorPresent(true);
      } else {
        setPickerConfig(
          buildPickerConfig(
            {
              mode: "securityTemplate" as const,
              securityTemplateKey: securityTemplateId,
              projectToken: container,
            },
            assetPickerConfigRef.current,
            uploaderConfigRef.current
          )
        );
      }
    }
  }, [handleHubAuthFlow]);

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
        {showHubLogin ? (
          <div className="info-wrapper" data-testid="hub-login-component">
            <HubLoginPage onSuccess={handleHubLoginSuccess} />
          </div>
        ) : isErrorPresent ? (
          <div className="info-wrapper" data-testid="warning-component">
            <WarningMessage content={warningText} />
          </div>
        ) : null}
        {!showHubLogin && pickerConfig && isPickerReady && (
          <AssetPicker
            config={pickerConfig}
            open={true}
            onSelect={handleSelect}
            onCancel={() => window.close()}
          />
        )}
      </div>
    </div>
  );
};

export default SelectorPage;
