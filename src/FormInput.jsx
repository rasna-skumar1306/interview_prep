import { useContext, useState } from "react";
import { TodoContext } from "./App";

const FormInput = () => {
  const [todo, setTodo] = useState("");

  let TC = useContext(TodoContext);

  const addTodos = () => {
    if (todo === "") return;
    TC.setTodos((previousState) => [
      ...previousState,
      { id: previousState.length + 1, name: todo, completed: false },
    ]);
  };
  
  return (
    <div style={{ height: "3rem" }}>
      <input
        type="text"
        placeholder="todo"
        onChange={(e) => setTodo(e.target.value)}
        style={{ height: "70%" }}
        value={todo}
      />
      <button
        onClick={() => {
          addTodos();
          setTodo("");
        }}
      >
        + Add Todo
      </button>
    </div>
  );
};

export default FormInput;
