import React from "react";
import iconPng from "../../assets/icon.png";

const DamEnvVariables = {
  DAM_APP_NAME: "Scaleflex DAM",
  ASSET_NAME_PARAM: "name",
  RTE_DAM_ICON: (
    <img src={iconPng} alt="Scaleflex DAM" width="25" height="23" />
  ),
  DIRECT_SELECTOR_PAGE: "novalue", // possible values "url", "window", default => "novalue"
};

export default DamEnvVariables;
