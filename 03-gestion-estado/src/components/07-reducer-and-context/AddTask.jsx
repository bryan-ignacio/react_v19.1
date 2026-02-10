import { useState } from "react";

/*
que hace este Componente?
agrega una tarea al arreglo de tareas.

recibe un parametro que es una prop controladora de evento que
hace referencia a la funcion controladora de evento handleAddTask
para agregar una tarea al array de tareas.

*/
export default function AddTask({ onAddTask }) {
  // utilizamos el hook useState para mantener la informacion entre renderizaciones.
  // este estado sirvira para mantener el texto de entrada del input.
  const [text, setText] = useState("");

  //actualiza el estado con el nuevo valor del input.
  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setText("");
    onAddTask(text);
  }

  /* 
  el JSX que renderiza el componente contiene:
    (input)(boton Agregar)
  */
  return (
    <>
      {/* 
    el ingresar valores al input este lanza el evento onChange
    vamos a utilizar una funcion controladora de evento para eso
    */}
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
