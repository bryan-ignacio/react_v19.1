/*
Desafio dos:
En este ejemplo, la SearchBar tiene su propio estado query que controla la entrada de texto.
Su componente padre FilterableList muestra una List de elementos, pero no tiene en cuenta la consulta de busqueda.

Utilice la funcion filterItems(food, query) para filtrar la lista segun la consulta de busqueda.
para probar los cambios, compruebe que al escribr "s" en la entrada se filtra a "Sushi", "Shish kebab" y "Dim sum".

Tenga en cuenta que fliter Items ya esta implementado e importado, por lo que no necesita escribirlo usted mismo.
*/
import { useState } from "react";
import { foods, filterItems } from "./data";

export default function FilterableList() {
  //estado que controla la entrada de texto.
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={foods} query={query} />
      <hr />
    </>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      Buscar: <input value={query} onChange={onChange} />
    </label>
  );
}

function List({ items, query }) {
  const itemsfilter = filterItems(items, query);

  return (
    <table>
      <tbody>
        {itemsfilter.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
