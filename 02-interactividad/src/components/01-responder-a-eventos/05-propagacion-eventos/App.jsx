export default function App() {
  return (
    <>
      <h3>Propagacion de Eventos</h3>
      <ToolBar />
    </>
  );
}

function ToolBar() {
  function handleModificarClick() {
    alert("Archivo Modificado!");
  }

  function handleGenerarClick() {
    alert("PDF Generado.");
  }

  return (
    <>
      <div
        onClick={() => alert("¡Hiciste clic en la barra de herramientas!")}
        style={{ backgroundColor: "gray", padding: "20px" }}
      >
        <button onClick={handleModificarClick}>Modificar Archivo</button>
        <br />
        <button onClick={handleGenerarClick}>Generar PDF</button>
      </div>
    </>
  );
}
