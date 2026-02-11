import { useContext, useState } from "react";
import { TasksDispatchContext } from "./Context";

let nextId = 3;
export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  function handleClick() {
    setText("");
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
      <input type="text" onChange={handleChange} value={text} />
      <button onClick={handleClick}>Agregar</button>
    </>
  );
}
