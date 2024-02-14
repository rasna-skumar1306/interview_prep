import React, { useContext, useRef } from "react";
import { TodoContext } from "./App";
import "./TodoItem.css";

const TodoItem = ({ id, name, completed }) => {
  const TC = useContext(TodoContext);
  const deleteTodo = (id) => {
    TC.setTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.id !== id)
    );
  };

  const setComplete = (id) => {
    TC.setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  let todoRef = [];

  const editTodo = (id) => {
    todoRef[id].current.focus();
  };

  return (
    <div key={id} className="todoItem">
      <input
        className={`input ${completed ? "complete" : ""}`}
        type="text"
        name={name}
        value={name}
        ref={todoRef[id] || (todoRef[id] = useRef())}
      />
      <button onClick={() => deleteTodo(id)}>delete</button>
      <button onClick={() => setComplete(id)}>Complete</button>
      <button onClick={() => editTodo(id)}>edit</button>
    </div>
  );
};

export default TodoItem;
