import React, { useState } from "react";
import { Button } from "@contentstack/venus-components";
import HubAuthUtils, { HubAuthData } from "../../common/utils/HubAuthUtils";
import WarningMessage from "../WarningMessage";
import rootConfig from "../../root_config";
import localeTexts from "../../common/locales/en-us";
import "./style.css";

interface HubLoginPageProps {
  onSuccess: (data: HubAuthData) => void;
}

const HubLoginPage: React.FC<HubLoginPageProps> = function ({ onSuccess }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  const handleLoginClick = async () => {
    setErrorText("");
    setIsLoading(true);
    try {
      const data = await HubAuthUtils.openHubLoginPopup();
      onSuccess(data);
    } catch (err: any) {
      setErrorText(err?.message || localeTexts.HubLogin.error);
      setIsLoading(false);
    }
  };

  return (
    <div className="hub-login-wrapper" data-testid="hub-login-wrapper">
      <img
        src={rootConfig?.damEnv?.SELECTOR_PAGE_LOGO}
        alt={`${localeTexts.SelectorPage.title} Logo`}
        className="hub-login-logo"
      />
      <p className="hub-login-text">{localeTexts.HubLogin.description}</p>
      {errorText && (
        <div className="hub-login-warning" data-testid="hub-login-warning">
          <WarningMessage content={errorText} />
        </div>
      )}
      <Button
        buttonType="control"
        version="v2"
        onClick={handleLoginClick}
        disabled={isLoading}
        data-testid="hub-login-btn"
      >
        {isLoading ? localeTexts.HubLogin.loading : localeTexts.HubLogin.button}
      </Button>
    </div>
  );
};

export default HubLoginPage;
