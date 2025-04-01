import React from "react";
import Button from "./Button";

const NewOne = ({ data, data2, children }) => {
  return (
    <div>
      NewOne {data} {data2}
      {children}
    </div>
  );
};

export default NewOne;
