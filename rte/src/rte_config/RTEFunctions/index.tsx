import React from "react";

/* Variables for getAssetType function */
const ASSET_DOCUMENT_TYPE = "Document";
const ASSET_IMAGE_TYPE = "Image";
const ASSET_PDF_TYPE = "Pdf";
const ASSET_ARCHIVE_TYPE = "Archive";
const ASSET_VIDEO_TYPE = "Video";
const ASSET_AUDIO_TYPE = "Audio";

/* Variables for getViewIconforTooltip function */
const PREVIEW_ICON = "Eye";
const NEWTAB_ICON = "NewTab";

const getDisplayUrl = (asset: any) => {
  if (asset.file.info.img_w < 700)
    return asset.link;
  else 
    return asset.link+'&w=700';
  /* returns the display url of the asset. Return Type = "String" */
};

const getAssetType = (asset: any) => {
  const typeSplit = asset.file.type.split("/");
  let type = typeSplit[0];
  let subType = typeSplit[1];
  if (type == 'image') return ASSET_IMAGE_TYPE
  else if (type == 'video') return ASSET_VIDEO_TYPE
  else if (type == 'application' && subType == 'pdf') return ASSET_PDF_TYPE
  else if (type == 'audio') return ASSET_AUDIO_TYPE
  else return ASSET_DOCUMENT_TYPE

  /* possible return values ==> Document, Image, Pdf, Archive, Video, Audio */
};

const getViewIconforTooltip = (type: string) => {
  return PREVIEW_ICON
};

const getSelectorWindowUrl = (config: any) => {
  return ""; // return url to be opened as selector page
};

const handleSelectorPageData = (event: any) => {
  return []; // return array of asset objects which are selected
};

const handleSelectorWindow = (config: any) => {
  /* code logic to open the DAM selector page */
};

const rteFunctions: any = {
  getDisplayUrl,
  getAssetType,
  getViewIconforTooltip,
  getSelectorWindowUrl,
  handleSelectorPageData,
  handleSelectorWindow,
};

export default rteFunctions;
