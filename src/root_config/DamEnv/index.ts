import Logo from "../../common/asset/logo.svg";
import { TypeRootDamEnv } from "../../common/types/types";

const DamEnvVariables: TypeRootDamEnv = {
  DAM_APP_NAME: "Filerobot",
  ASSET_UNIQUE_ID: "id",
  SELECTOR_PAGE_LOGO: Logo,
  CONFIG_FIELDS: [],
  IS_DAM_SCRIPT: false,
  DAM_SCRIPT_URL: "",
  DIRECT_SELECTOR_PAGE: "novalue", // possible values "url", "window", default => "novalue"
};

export default DamEnvVariables;
