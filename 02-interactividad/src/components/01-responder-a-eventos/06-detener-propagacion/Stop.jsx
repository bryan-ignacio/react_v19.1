export default function Stop() {
  return (
    <>
      <ToolBar />
    </>
  );
}

function ToolBar() {
  function handleSubirClick() {
    alert("Subiendo archivo!");
  }

  function handleDescargarClick() {
    alert("Descargando archivo!");
  }

  return (
    <>
      <div style={{ backgroundColor: "gray" }}>
        <Button onSmash={handleSubirClick}>Subir</Button>
        <br />
        <Button onSmash={handleDescargarClick}>Descargar</Button>
      </div>
    </>
  );
}

function Button({ onSmash, children }) {
  function handleClick(e) {
    e.stopPropagation();
    onSmash();
  }

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
