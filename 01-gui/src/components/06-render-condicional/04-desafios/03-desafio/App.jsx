/*

Desafío 3 de 3: Refactorizar una serie de ? : a if y variables 
Este componente Drink utiliza una serie de condiciones ? :
para mostrar diferente información dependiendo de si la prop name es té o café.
El problema es que la información sobre cada bebida está repartida entre varias condiciones. 
Refactoriza este código para utilizar una única sentencia if en lugar de tres condiciones ? :.

*/
export default function App() {
  return (
    <>
      <DrinkList />
    </>
  );
}

function Drink({ name }) {
  let te = {
    parte: "hoja",
    contenido: "15–70 mg/taz",
    antiguedad: "4,000+ años",
  };

  let cafe = {
    parte: "grano",
    contenido: "80–185 mg/taza",
    antiguedad: "1,000+ años",
  };

  let content = "";

  if (name == "té") {
    content = (
      <>
        <h1>{name}</h1>
        <dl>
          <dt>Parte de la planta</dt>
          <dd>{te.parte}</dd>
          <dt>Contenido de cafeína</dt>
          <dd>{te.contenido}</dd>
          <dt>Antigüedad</dt>
          <dd>{te.antiguedad}</dd>
        </dl>
      </>
    );
  } else {
    content = (
      <>
        <h1>{name}</h1>
        <dl>
          <dt>Parte de la planta</dt>
          <dd>{cafe.parte}</dd>
          <dt>Contenido de cafeína</dt>
          <dd>{cafe.contenido}</dd>
          <dt>Antigüedad</dt>
          <dd>{cafe.antiguedad}</dd>
        </dl>
      </>
    );
  }

  return <section>{content}</section>;
}

function DrinkList() {
  return (
    <div>
      <Drink name="té" />
      <Drink name="café" />
    </div>
  );
}
