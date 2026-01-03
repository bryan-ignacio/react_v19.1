import { useState } from "react";

/*
La forma mas facil de eliminar un elemento de un array es con filter.
retornara un nuevo array que no contenga ese elemento.
 */
export default function App() {
  return (
    <>
      <Content />
    </>
  );
}

function Content() {
  let initialArray = [
    { id: 0, name: "Marta Colvin Andrade" },
    { id: 1, name: "Lamidi Olonade Fakeye" },
    { id: 2, name: "Louise Nevelson" },
  ];

  const [array, setArray] = useState(initialArray);

  function handleChange(elemento) {
    setArray(array.filter((a) => a.id !== elemento.id));
  }

  return (
    <>
      <h2>Eliminar Elemento en Array en un estado de React</h2>
      <ul>
        {array.map((elemento) => (
          <li>
            {elemento.name}
            <button onClick={() => handleChange(elemento)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}
