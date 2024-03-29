import React, { useState } from "react";


interface TypeCustomComponent {
  selectedAssetIds: string[];
  successFn: Function;
  closeFn: Function;
  assetData: any[];
}

const CustomComponent: React.FC<TypeCustomComponent> = function ({
  selectedAssetIds,
  successFn,
  closeFn,
  assetData,
}) {
  const [selectedAssets, setSelectedAssets] = useState<any[]>([]);
  const [itemStatus, setItemStatus] = useState<any>({});
  const [tableData, setTableData] = useState<any[]>([]);

  const getSelectedRow = (ids: string[]) => {
    setSelectedAssets(
      assetData?.filter((fileObj: any) =>
        // eslint-disable-next-line
        ids?.includes(`${fileObj?._id}`)
      )
    );
  };

  const fetchTableData = async ({ searchText }: any) => {
    //setItemStatus(utils.getItemStatusMap(15, "loading"));
    if (searchText) {
      const searchData = assetData?.filter((asset: any) =>
        asset?.assetName?.toLowerCase()?.includes(searchText?.toLowerCase())
      );
      //setItemStatus(utils.getItemStatusMap(searchData?.length, "loaded"));
      setTableData(searchData);
    } else {
      //setItemStatus(utils.getItemStatusMap(15, "loaded"));
      setTableData(assetData);
    }
  };

  return (
    <div className="selector-custom-component">
        hi
    </div>
  );
};

export default CustomComponent;
