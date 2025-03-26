import { useState } from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent";

function App() {
  const [disable, setDisable] = useState(false);
  const handleDisable = () => {
    console.log("call function");
    setDisable((prev) => !prev);
  };

  return (
    <div className="App">
      <h1>First React App</h1>
      <FirstComponent
        Firstname="sree"
        location="place"
        phno={1224}
        list={[]}
        handleDisable={handleDisable}
        disable={disable}
      />
    </div>
  );
}

export default App;
