export default function App() {
  return (
    <>
      <h3>Detener Propagacion</h3>
      <ToolBar />
    </>
  );
}

function ToolBar() {
  function handleGenerarClick(e) {
    e.stopPropagation();
    alert("Tabla Generada en HTML.");
  }
  function handleEjecutarClick(e) {
    e.stopPropagation();
    alert("Codigo ASCII Ejecutado");
  }

  return (
    <>
      <div
        style={{
          padding: "20px",
          backgroundColor: "gray",
          border: "1px solid white",
        }}
        onClick={() => {
          alert("¡Hiciste clic en la barra de herramientas!");
        }}
      >
        <button
          style={{
            display: "inline-block",
            padding: "5px 10px",
            backgroundColor: "black",
            marginRight: "10px",
          }}
          onClick={handleGenerarClick}
        >
          Generar Tabla
        </button>

        <button
          style={{
            display: "inline-block",
            padding: "5px 10px",
            backgroundColor: "black",
          }}
          onClick={handleEjecutarClick}
        >
          Ejecutar
        </button>
      </div>
    </>
  );
}
