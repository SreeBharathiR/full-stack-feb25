import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useState } from "react";

const Reducer = () => {
  const initialState = {
    tasks: ["task1", "task2"],
    users: [
      { name: "Dinesh", email: "dinesh@gmail.com" },
      { name: "Ragul", email: "ragul@gmail.com" },
    ],
  };
  const reducerFunc = (state, action) => {
    // console.log(action);
    switch (action.type) {
      case "ADDTASK":
        const newState = { ...state, tasks: [...state.tasks, action.payloads] };
        return newState;

      case "DELETETASK":
        const remainingUsers = state.tasks.filter(
          (user, index) => index !== action.payloads
        );
        return { ...state, tasks: remainingUsers };
      case "ADDUSER":
        return;
      default:
        break;
    }
  };
  const [typedText, setTypedText] = useState("");
  const [listState, listDispatch] = useReducer(reducerFunc, initialState);
  console.log(listState);
  const handleAdd = () => {
    listDispatch({
      type: "ADDTASK",
      payloads: typedText,
    });
  };

  const handleDeleteTask = (index) => {
    listDispatch({
      type: "DELETETASK",
      payloads: index,
    });
  };
  return (
    <div>
      <h1>Tasks List</h1>
      {listState.tasks.map((task, index) => (
        <div key={index}>
          <p>{task}</p>
          <button onClick={() => handleDeleteTask(index)}>Dlete</button>
        </div>
      ))}
      <input
        type="text"
        onChange={(e) => {
          setTypedText(e.target.value);
        }}
      ></input>
      <button onClick={handleAdd}>Add</button>
      <h1>Users List</h1>
      {listState.users.map((user, index) => (
        <div key={index}>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
        </div>
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
