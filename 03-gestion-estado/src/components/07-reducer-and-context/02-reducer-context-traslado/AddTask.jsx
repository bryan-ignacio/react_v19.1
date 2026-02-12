import { useContext, useState } from "react";
import { ContextDispatch, ContextTasks } from "./TasksContext";

let nextId = 3;

export default function AddTask() {
  const dispatch = useContext(ContextDispatch);
  const [text, setText] = useState("");

  function handleAddClick() {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAddClick}>Agregar</button>
    </>
  );
}
