import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import CounterContext from "../context/CounterContext";

const FirstComponent = () => {
  // let count = 0;
  const { Firstname, count } = useContext(CounterContext);
  const [name, setName] = useState(Firstname);

  const [array, setArray] = useState([]);

  // console.log(disable);
  // console.log(location);

  useEffect(() => {
    console.log("hi");
  }, [name]);
  return (
    <>
      <p>{count}</p>
      <Button value={"Increament"} disable={count >= 5 ? true : false}></Button>
      <Button value={"decrement"} disable={count < 1 ? true : false}></Button>
      <p>{name}</p>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <br></br>
      <br></br>
    </>
  );
};

export default FirstComponent;
