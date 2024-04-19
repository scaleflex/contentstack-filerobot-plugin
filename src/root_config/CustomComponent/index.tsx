import React from "react";

interface TypeCustomComponent {}

const CustomComponent: React.FC<TypeCustomComponent> = function () {
  return (
    <div className="config-custom-component">
      <center><a href="https://www.scaleflex.com/request-a-demo">Register for a demo</a> if you do not already have a Filerobot account.</center>
    </div>
  );
};

export default CustomComponent;
