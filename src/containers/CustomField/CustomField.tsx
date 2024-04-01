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
    const filesArr = stateFileRobot.files.filter((file: any) => file.uuid != uuid)
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
        files.forEach((selected: any) => {
          const storeData = {
                uuid: selected.file.uuid,
                url: {
                  cdn: selected.file.url.cdn
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
      const k = key(item);
      if (!map.has(k)) map.set(k, item);
      return map;
    }, new Map()).values());
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
          <div key={file.uuid} className="filerobot-image">
            <img src={file.url.cdn} />
            <div onClick={() => removeImage(file.uuid)} className="remove-image-btn">x</div>
          </div>
        )) : null
      }
      </div>
    </div>
  );
};

export default CustomFieldExtension;
