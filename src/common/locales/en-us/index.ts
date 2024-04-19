import rootConfig from "../../../root_config";

const localeTexts = {
  ConfigFields: {
    entrySaveRadioButton: {
      label: "Save In Entry",
      help: `You can select how you want to save the data you get from ${rootConfig.damEnv.DAM_APP_NAME}.`,
      placeholder:
        "Enter the structure of the data you want to save in the entry",
      instruction:
        "If the 'All Fields' option is selected, you might be able to add limited assets in the custom field depending on the size of the data. If you select the 'Custom Fields' option, you can select the structure of the data you want to save in the entry. ",
      referS: "(Refer to the",
      custom: "Custom Fields Limitations",
      referE:
        " documentation, for more details). To increase this limit, please contact support.",
      notetext:
        "<b>Note:</b> When you change the settings from All Fields to Custom Fields, and vice versa, the existing assets follow the old configuration settings, whereas new assets added to the entry will store the data according to the updated configuration settings.",
      wholeJson: "All Fields",
      customJson: "Custom Fields",
    },
    keysField: {
      label: `${rootConfig.damEnv.DAM_APP_NAME} Keys`,
      help: "Select the keys you want to save",
      placeholder: "Select keys",
      instruction: "Select the keys you want to save",
    },
    customWholeJson: {
      modal: {
        header: "Add Key Path",
        label: "Key Path",
        placeholder: "Enter Key Path",
        instructionS:
          'Use the dot format to enter nested objects, for eg: "file.url".',
        instructionE:
          "Label already created/added in the dropdown will not be created.",
        note: "Note: ",
        btn: {
          cancel: "Cancel",
          create: "Create",
          apply: "Create and Apply",
        },
        addOption: "New Key Field",
        successToast: {
          type: "success",
          text: "Successfully added key path to options",
        },
      },
      notification: {
        errorS: "The option",
        errorE: "already exists",
      },
    },
    invalidCredentials: "Invalid Configuration",
    emptyValue: "Field Value Missing",
  },
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
