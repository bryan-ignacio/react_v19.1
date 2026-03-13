/*
    Acceder a nodos DOM de otros componentes
    POdemos pasar refs desde un componente padrea a componentes hijos al igual que cualquier prop.
*/

import { useRef } from "react";

function MyInput({ ref }) {
  return <input type="text" ref={ref} />;
}

/*
En este ejemplo: creamos una referencia con useRef por que? por que queremos acceder al nodo del DOM que 
se creara en el componente MyInput. Luego, pasamos esa referencia como prop ref al componente MyInput.

ahora el inputRef.current apuntara al nodo del DOM del input que se renderiza en MyInput.

que cosas podemos hacer? podemos acceder a las propiedades del nodo del DOM, como value, focus, etc. por ejemplo, podríamos agregar un botón que al hacer clic enfoque el input:

 */
export default function MyForm() {
  const inputRef = useRef(null);

  return (
    <>
      <MyInput ref={inputRef} />
    </>
  );
}

//La inputRef creada en MyForm ahora apunta al elemento DOM <input> devuelto por MyInput
