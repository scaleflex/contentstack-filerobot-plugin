declare const utils: {
    popupWindow: (windowDetails: any) => Window | null;
    handleImageError: (event: any) => void;
    getIconType: (resource_type: any) => any;
    getTargetValue: (fieldName: any, type: any) => boolean | "_blank" | undefined;
    getHeightWidth: (displayType: any) => "180px" | "auto";
    getToolTipIconContent: (type: any) => string;
    getInitialDimensions: (element: any, displayType: any) => {
        width: string;
        height: string;
    };
    getProperties: (isHighlight: any, isInline: any, displayType: any) => {
        highlightclass: string;
        downloadTypeclass: string;
    };
    getAlignmentStyle: (alignment: any, attrs: any, isInline: any) => any;
};
export default utils;
