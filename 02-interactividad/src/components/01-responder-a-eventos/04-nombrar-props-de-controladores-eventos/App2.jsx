export default function App2() {
  function handleSubirClick() {
    alert("Archivo Subido.");
  }

  function handleReproducirClick() {
    alert("Reproduciendo Musica.");
  }

  return (
    <>
      <h2>App2</h2>
      <BarraHerramientas
        onSubir={handleSubirClick}
        onReproducir={handleReproducirClick}
      />
    </>
  );
}

function BarraHerramientas({ onReproducir, onSubir }) {
  return (
    <>
      <Boton onClick={onReproducir}>Reproducir</Boton>
      <br />
      <Boton onClick={onSubir}>Subir</Boton>
    </>
  );
}

function Boton({ onClick, children }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}
