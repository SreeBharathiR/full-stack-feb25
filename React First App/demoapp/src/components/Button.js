import React from "react";

const Button = ({ increment, value, disable }) => {
  return (
    <button onClick={increment} disabled={disable}>
      {value}
    </button>
  );
};

export default Button;
