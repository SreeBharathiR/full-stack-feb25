import React, { useContext } from "react";
import CounterContext from "../context/CounterContext";

const Button = ({ value, disable }) => {
  const { increment } = useContext(CounterContext);
  return (
    <button onClick={increment} disabled={disable}>
      {value}
    </button>
  );
};

export default Button;
