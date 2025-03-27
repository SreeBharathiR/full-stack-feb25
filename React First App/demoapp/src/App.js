import { useEffect, useState } from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import Button from "./components/Button";
import CounterContext, { ContextProvider } from "./context/CounterContext";

function App() {
  return (
    <div className="App">
      <h1>First React App</h1>
      {/* <FirstComponent
        Firstname="sree"
        location="place"
        phno={1224}
        list={[]}
        handleDisable={handleDisable}
        disable={disable}
        increment={increment}
        count={count}
      /> */}
      {/* <FirstComponent Firstname="sree" count={count}>
        <Button
          increment={increment}
          value={"Increament"}
          disable={count >= 5 ? true : false}
        ></Button>
        <Button
          increment={decrement}
          value={"decrement"}
          disable={count < 1 ? true : false}
        ></Button>
      </FirstComponent> */}
      {/* context api */}
      <ContextProvider>
        <FirstComponent></FirstComponent>
      </ContextProvider>
    </div>
  );
}

export default App;
