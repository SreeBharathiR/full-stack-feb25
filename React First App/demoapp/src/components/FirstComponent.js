import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import CounterContext from "../context/CounterContext";
import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";

const FirstComponent = () => {
  // let count = 0;
  const { Firstname, count, increment } = useContext(CounterContext);
  const [name, setName] = useState(Firstname);

  const [array, setArray] = useState(["sree", "hari", "srinivya"]);

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
      {array.map((value, index) => {
        console.log(Date.now());
        return <p key={index}>{value}</p>;
      })}
    </>
  );
};

export default FirstComponent;
