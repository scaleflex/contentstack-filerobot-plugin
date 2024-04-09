import rootConfig from "../../../root_config";

const localeTexts = {
  404: {
    title: "404: Not Found",
    body: "The link you tried to access doesn't seem to exist. <br />Please verify and enter the correct URL.",
    button: {
      text: "Learn More",
      url: "https://www.contentstack.com/docs/developers/developer-hub/about-ui-locations/",
    },
  },
  CustomFields: {
    assetLimit: {
      btnTooltip:
        "You cannot choose assets as the maximum limit has been reached.",
      notificationMsg:
        "The maximum asset limit has been reached! You cannot add more assets than the preconfigured limit.",
    },
    button: {
      btnText: "Filerobot",
    },
    assetCard: {
      hoverActions: {
        preview: "Preview",
        platformRedirect: `Open In ${rootConfig?.damEnv?.DAM_APP_NAME}`,
        remove: "Remove",
        drag: "Reorder",
      },
    },
    AssetNotAddedText: "No assets have been added",
    header: {
      asset: {
        singular: "Asset",
        plural: "Assets",
      },
      changeView: "Change View",
    },
    listViewTable: {
      thumbnailCol: "Asset Image",
      assetNameCol: "Name",
      type: "Type",
    },
    toolTip: {
      thumbnail: "Thumbnail",
      list: "List",
      content: "Asset Image Not Available",
    },
  },
  SelectorPage: {
    title: rootConfig?.damEnv?.DAM_APP_NAME,
  },
  Warnings: {
    incorrectConfig: `The credentials you entered for the "${rootConfig?.damEnv?.DAM_APP_NAME} App" are invalid or missing. Please update the configuration details and try again.`,
  },
  DeleteModal: {
    header: "Remove Asset from Contentstack",
    body: "Are you sure you want to remove <b>&apos;$&apos;</b> from Contentstack?",
    cancelButton: "Cancel",
    confirmButton: "Remove",
  },
  AssetSidebarWidget: {
    title: "Asset Sidebar Widget",
    body: "This is the iframe that contains your Asset Sidebar Widget.",
    button: {
      text: "Learn More",
      url: "https://www.contentstack.com/docs/developers/developer-hub/asset-sidebar-location/",
    },
  },
  ConfigScreen: {
    title: "App Configuration",
    body: "This is the location that contains your app configuration.",
    button: {
      text: "Learn More",
      url: "https://www.contentstack.com/docs/developers/developer-hub/app-config-location/",
    },
  },
  CustomField: {
    title: "Custom Field",
    body: "This is the iframe that contains your Custom Field.",
    button: {
      text: "Learn More",
      url: "https://www.contentstack.com/docs/developers/developer-hub/custom-field-location/",
    },
  },
  DashboardWidget: {
    title: "Dashboard Widget",
    body: "This is the location that contains your Dashboard Widget.",
    button: {
      text: "Learn More",
      url: "https://www.contentstack.com/docs/developers/developer-hub/dashboard-location/",
    },
  },
  SidebarWidget: {
    title: "Sidebar Widget",
    body: "This is the iframe that contains your Sidebar Widget.",
    button: {
      text: "Learn More",
      url: "https://www.contentstack.com/docs/developers/developer-hub/sidebar-location/",
    },
  },
  FullPage: {
    title: "Full Page App",
    body: "This is the location that contains your Full Page App.",
    button: {
      text: "Learn More",
      url: "https://www.contentstack.com/docs/developers/developer-hub/full-page-location/",
    },
  },
  FieldModifier: {
    title: "Field Modifier App",
    body: "This is the location that contains your Field Modifier app.",
    button: {
      text: "Learn More",
      url: "https://www.contentstack.com/docs/developers/developer-hub/field-modifier-location/",
    },
  },
  AppFailed: {
    Message1: "The App was loaded outside Contentstack Dashboard.",
    Message2: "Please navigate to Your Stack in Contentstack where you just installed the Application ",
    body: "For Assistance, please reach out to us at support@contentstack.com",
    button: {
      text: "Learn More",
      url: "https://www.contentstack.com/docs/developers/developer-hub/marketplace-app-boilerplate/",
    },
  },
};

export default localeTexts;
