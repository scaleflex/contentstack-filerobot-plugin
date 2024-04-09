import React, { useEffect, useState,useMemo } from "react";
import ContentstackAppSDK from "@contentstack/app-sdk";
// import UiLocation from "@contentstack/app-sdk/dist/src/uiLocation";
import { isNull } from "lodash";
import { Props } from "../types/types";
// import { KeyValueObj } from "../types/types";
// import { AppFailed } from "../../components/AppFailed";
import { MarketplaceAppContext } from "../contexts/marketplaceContext";

type ProviderProps = {
  children?: React.ReactNode;
};

/**
 * Marketplace App Provider
 * @param children: React.ReactNode
 */
export const MarketplaceAppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [failed, setFailed] = useState<boolean>(false);
  const [appSdk, setAppSdk] = useState<any>({});
  const [appConfig, setAppConfig] = useState<Props>({});

  // Initialize the SDK and track analytics event
  useEffect(() => {
    ContentstackAppSDK.init()
      .then(async (appSDK: any) => {
        await setAppSdk(appSDK);
        await appSDK?.location?.CustomField?.frame?.enableAutoResizing();
        const appSdkConfig = await appSDK?.getConfig();
        await setAppConfig(appSdkConfig);
      })
      .catch((error) => {
        const currentLocation = window?.location?.href;
        if (!currentLocation?.includes("selector-page"))
          console.error("Error: Contentstack Initialization", error);
        setFailed(true);
      });
  }, []);

  const contextValue = useMemo(
    () => ({ appSdk, appConfig, appFailed: failed }),
    [appSdk, appConfig, failed]
  );

  return (
    <MarketplaceAppContext.Provider value={contextValue}>
      {!failed && isNull(appSdk) ? <div>Loading...</div> : children}
    </MarketplaceAppContext.Provider>
  );
};
