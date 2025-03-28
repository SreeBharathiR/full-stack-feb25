import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useState } from "react";

const initialState = {
  tasks: ["task1"],
  users: [
    {
      email: "user1@gmmail.com",
      name: "User 1",
    },
  ],
};
const reducerFunc = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        tasks: [...state.tasks, action.payload.taskName],
      };
    case "DELETE":
      break;
    default:
      break;
  }
};
const Reducer = () => {
  const [typedText, setTypedText] = useState("");
  const [list, dispatchList] = useReducer(reducerFunc, initialState);
  console.log(list);
  const handleAdd = () => {
    dispatchList({
      type: "ADD",
      payload: { taskName: typedText },
    });
  };
  return (
    <div>
      <h1>Tasks List</h1>
      {list.tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
      <input
        type="text"
        onChange={(e) => {
          setTypedText(e.target.value);
        }}
      ></input>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Reducer;
