import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setText("");
    onAddTask(text);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Agregar Tarea"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Agregar</button>
    </>
  );
}
