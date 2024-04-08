import React, { useCallback, useState, useRef, useEffect } from "react";
import { useAppConfig } from "../../common/hooks/useAppConfig";
import Explorer from '@filerobot/explorer'
import Filerobot from '@filerobot/core'
import XHRUpload from '@filerobot/xhr-upload'
import { useCustomField } from "../../common/hooks/useCustomField";
import { useEntry } from "../../common/hooks/useEntry";
import { FileRobotData } from "../../common/types/types";
import { isEmpty, isArray } from "lodash";
import "./CustomField.css";
import "@filerobot/core/dist/style.min.css";
import "@filerobot/explorer/dist/style.min.css";
import { Icon, cbModal } from "@contentstack/venus-components";
import DeleteModal from "../../components/DeleteModal";

const CustomFieldExtension = () => {
  const initialized = useRef(false)
  const filerobot = useRef<any>(null);
  const { customField, setFieldData }: any = useCustomField();
  const [ stateFileRobot, setFileRobot ] = useState<FileRobotData>({
    show: false,
    files: [],
  });
  const [ stateFiles, setFiles ] = useState<any[]>([]);
  const [ removeLastItem, setRemoveLastItem ] = useState(false);
  const appConfig = useAppConfig();

  const toggleFileRobotVisibility = () => {
    setFileRobot((prev) => ({
      show: !prev.show,
      files: prev.files,
    }));
  };

  const closeFileRobot = () => {
    setFileRobot((prev) => ({
      show: false,
      files: prev.files,
    }));
  };

  const removeImage = (uuid: any) => {
    const filesArr = stateFileRobot.files.filter((file: any) => file.file.uuid != uuid)
    if (filesArr.length == 0) setRemoveLastItem(true)
    setFieldData(filesArr)
  };

  const removeAllImage = () => {
    setFieldData([])
    setRemoveLastItem(true)
  };

  useEffect(() => {
    if (!isEmpty(appConfig) && appConfig !== null) {
  
      const container = appConfig?.["container"] || "";
      const securityTemplateId = appConfig?.["security_template_id"] || "";
   
      filerobot.current = Filerobot({
        securityTemplateId: securityTemplateId,
        container: container,
        dev: false,
      })
      .use(Explorer, {
        config: {
          limit: 50,
          tagging: {
            language: "en",
            confidence: 60,
            limit: 10,
          }
        },
        target: "#filerobot-widget",
        inline: true,
        width: "100%",
        height: "600px",
        dismissUrlPathQueryUpdate: true,
        showDetailsView: false,
        showFolderTree: true,
        floaty: false,
        disableDownloadButton: true,
        hideDownloadButtonIcon: true,
        preventDownloadDefaultBehavior: true,
        resetAfterClose: true,
          // reference https://github.com/scaleflex/commercetools-filerobot-plugin/blob/master/src/components/filerobot/filerobot-dam.jsx
          locale: {
            strings: {
                mutualizedExportButtonLabel: 'Insert',
                mutualizedDownloadButton: 'Insert',
            }
        },
      })
      .use(XHRUpload) 
      .on('export', function (files, popupExportSuccessMsgFn, downloadFilesPackagedFn, downloadFileFn) {
        const fileArr:any[] = []
        console.log(files)
        files.forEach((selected: any) => {
          const storeData = {
                link: selected.link,
                file:{
                  name: selected.file.name,
                  uuid: selected.file.uuid,
                  type: selected.file.type
                }
              }
          fileArr.push(storeData)
        })
        setFiles(fileArr)
        setRemoveLastItem(false)
      });
    }
  }, [appConfig]);

  useEffect(() => {
    if ((!isEmpty(customField) && customField !== null && !removeLastItem) || (isArray(customField) && customField.length == 0 && removeLastItem)){
      setFileRobot({
        show: false,
        files: customField,
      });
    }
  }, [customField]);

  const getUnique = (array: any, key: any) => {
    if (typeof key !== 'function') {
      const property = key;
      key = function(item: any) { return item[property]; };
    }
    return Array.from(array.reduce(function(map: any, item: any) {
      const k = key(item.file);
      if (!map.has(k)) map.set(k, item);
      return map;
    }, new Map()).values());
  }

  const getTypeFile = (file: any) => {
    const type = file.file.type.split("/");
    return type[0]
  }

  const fixHeight = (url: string) => {
    return url + '&h=200'
  }

  useEffect(() => {
    const filesArr = getUnique(stateFileRobot.files.concat(stateFiles), 'uuid');
    if (filesArr && filesArr.length > 0) setFieldData(filesArr)
  },[stateFiles]);

  return (
    <div className="filerobot-widget-field">
      <button className={`button-10 ${stateFileRobot.show ? 'hidden': 'block'}`} onClick={toggleFileRobotVisibility}>Filerobot</button>
      <div className={`filerobot-widget-content ${stateFileRobot.show ? 'block': 'hidden'}`}>
        <div id="filerobot-widget"></div>
        <div onClick={closeFileRobot} className="btn-close"> X </div>
      </div>
      <div className="filerobot-images">
      {
        stateFileRobot.files && stateFileRobot.files.length > 0  ? stateFileRobot.files.map((file: any, index: number) => (
          <div key={file.file.uuid} className="filerobot-image">
            { 
              getTypeFile(file) == 'image' ? ( <div className="file-content"><img src={fixHeight(file.link)} /> </div>) : ( <div className="file-content"><div className="file-content-type">{file.file.type}</div></div>)
            }
           
            <div onClick={() =>  cbModal({
            component: (props: any) => (
              <DeleteModal remove={removeImage} id={file.file.uuid} name={file.file.name} {...props} />
            ),
            modalProps: {
              size: "xsmall",
            }
          })} className="remove-image-btn">x</div>
          </div>
        )) : null
      }
      </div>
    </div>
  );
};

export default CustomFieldExtension;
