import React, { useRef, useState } from "react";

const Timer = () => {
  const [timerState, setTimerStart] = useState(false);
  const id = useRef();
  const handleStart = () => {
    id.current = setTimeout(() => {
      setTimerStart(true);
      console.log("start" + id.current);
    }, 5000);
  };

  function handleStop() {
    clearTimeout(id.current);
    console.log("stoped");
  }
  return (
    <div>
      <h1>Timer component</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
