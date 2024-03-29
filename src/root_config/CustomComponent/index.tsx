import React from "react";

interface TypeCustomComponent {}

const CustomComponent: React.FC<TypeCustomComponent> = function () {
  return (
    <div className="config-custom-component">
      Custom Component - This is a custom component and can be modified using
      root_config
    </div>
  );
};

export default CustomComponent;
