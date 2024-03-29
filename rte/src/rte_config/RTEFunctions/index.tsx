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
  return asset.link;
  /* returns the display url of the asset. Return Type = "String" */
};

const getAssetType = (asset: any) => {
  const typeSplit = asset.file.type.split("/");
  let type = typeSplit[0];
  let subType = typeSplit[1];
  if (type == 'image') return 'Image'
  else if (type == 'video') return 'Video'
  else if (type == 'application' && subType == 'pdf') return 'Pdf'
  else if (type == 'audio') return 'Audio'
  else return 'Image'

  /* possible return values ==> Document, Image, Pdf, Archive, Video, Audio */
};

const getViewIconforTooltip = (type: string) => {
  /* possible return values ==> Eye and NewTab */
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
