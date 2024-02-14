import { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import FormInput from "./FormInput";
import TodoItem from "./TodoItem";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      name: "go through notes",
      completed: false,
    },
  ],
  setTodos: () => {},
});

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "go through notes",
      completed: false,
    },
  ]);

  useEffect(() => {
    setTimeout(() => console.log("loading"), 1000);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos: todos, setTodos: setTodos }}>
      <FormInput />
      {todos.map(({ id, name, completed }) => (
        <TodoItem id={id} key={id} name={name} completed={completed} />
      ))}
    </TodoContext.Provider>
  );
}

export default App;
