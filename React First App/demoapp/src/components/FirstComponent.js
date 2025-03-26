import React, { useEffect, useState } from "react";
import Button from "./Button";

const FirstComponent = ({
  Firstname,
  location,
  phno,
  list,
  handleDisable,
  disable,
}) => {
  // let count = 0;
  const [count, setCount] = useState(-2);
  const [name, setName] = useState(Firstname);

  const [array, setArray] = useState([]);

  function increment() {
    if (count >= 5) {
      handleDisable();
    }
    setCount(count + 1);

    // setName(name + "s");
  }
  // console.log(disable);
  // console.log(location);

  useEffect(() => {
    console.log("hi");
  }, [name]);
  return (
    <>
      <p>{count}</p>
      <Button
        increment={increment}
        value={"Increament"}
        disable={disable}
      ></Button>
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
