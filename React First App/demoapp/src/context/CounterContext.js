import { createContext, useState } from "react";

const CounterContext = createContext({ count: 0 });

export const ContextProvider = ({ children }) => {
  const [disable, setDisable] = useState(false);
  const [decrementDisble, setDecrementDisable] = useState(false);
  const [count, setCount] = useState(0);
  const handleDisable = () => {
    console.log("call function");
    setDisable((prev) => !prev);
  };
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};
export default CounterContext;
