export default function App() {
  return (
    <>
      <h2>Leyendo props desde la funcion controladore de eventos</h2>
      <BarraHerramientas />
    </>
  );
}

function BarraHerramientas() {
  return (
    <>
      <div>
        <AlertButton message={"Reproduciendo Musica!"}>reproducir</AlertButton>
      </div>
      <div>
        <AlertButton message={"Generando Imagen!"}>generar</AlertButton>
      </div>
    </>
  );
}

function AlertButton({ message, children }) {
  function handleClick() {
    alert(message);
  }

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
