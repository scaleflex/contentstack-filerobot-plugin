export interface KeyValueObj {
  [key: string]: string;
}

export type ChildProp = {
  children: string | JSX.Element | JSX.Element[];
};

export interface FileRobotData {
  show: boolean;
  files: any
}  

export type Props = {
  [key: string]: any;
};


export interface TypeRootDamEnv {
  IS_DAM_SCRIPT?: boolean;
  DAM_APP_NAME: string;
  CONFIG_FIELDS: string[];
  ASSET_UNIQUE_ID: string;
  DAM_SCRIPT_URL?: string;
  SELECTOR_PAGE_LOGO?: any;
  DIRECT_SELECTOR_PAGE: string;
}

export interface TypeRootSelector {
  openComptactView?: Function;
  customSelectorComponent?: Function;
}

export interface TypeErrorFn {
  isErr: boolean;
  errorText: string;
}

export interface TypeRootConfig {
  damEnv: TypeRootDamEnv;
  configureConfigScreen?: Function;
  customConfigComponent?: Function;
  customWholeJson?: Function;
  filterAssetData?: Function;
  getSelectorWindowUrl?: Function;
  handleSelectorPageData?: Function;
  handleSelectorWindow?: Function;
  openComptactView?: Function;
  customSelectorComponent?: Function;
  handleConfigtoSelectorPage?: Function;
}

export interface TypeRootCustomField {
  filterAssetData?: Function;
  getSelectorWindowUrl?: Function;
  handleConfigtoSelectorPage?: Function;
  handleSelectorPageData?: Function;
  handleSelectorWindow?: Function;
}

export interface TypeSelectorContainer {
  containerRef: any;
  containerClass: string;
  containerId: string;
}

export interface TypeAsset {
  id: string;
  type: string;
  name: string;
  width: string;
  height: string;
  size: string;
  thumbnailUrl: string;
  previewUrl?: string; // if you don't want "preview" platform option don't provide this parameter
  platformUrl?: string; // if you don't want "open in DAM" platform option don't provide this parameter
}

export interface TypeCustomConfigUpdateParams {
  fieldName: string;
  fieldValue: string;
  saveConfig: boolean;
  saveServerConfig: boolean;
}

export interface TypeRootConfigSreen {
  configureConfigScreen?: Function;
  customConfigComponent?: Function;
  customWholeJson?: Function;
}
