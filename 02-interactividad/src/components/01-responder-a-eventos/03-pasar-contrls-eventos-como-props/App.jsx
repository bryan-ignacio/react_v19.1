export default function App() {
  return (
    <>
      <div>
        <h2>Pasar Controladores de Eventos como props.</h2>
        <BarraHerramienta />
      </div>
    </>
  );
}

function BarraHerramienta() {
  return (
    <>
      <PlayBoton movieName={"Dracula"} />
      <SubirBoton />
    </>
  );
}

function SubirBoton() {
  function handleClick() {
    alert("Subiendo Archivo.");
  }

  return (
    <>
      <Boton onclick={handleClick}>Subir</Boton>
    </>
  );
}

function PlayBoton({ movieName }) {
  return (
    <>
      <Boton onclick={() => alert(`Reproduciendo ${movieName}`)}>
        Reproducir
      </Boton>
    </>
  );
}

function Boton({ onclick, children }) {
  return (
    <>
      <button onClick={onclick}>{children}</button>
    </>
  );
}
