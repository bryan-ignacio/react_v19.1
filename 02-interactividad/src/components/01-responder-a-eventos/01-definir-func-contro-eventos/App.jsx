export default function App() {
  return (
    <>
      <Button />
      <br />
      <Button2 />
      <br />
      <Button3 />
    </>
  );
}

function Button() {
  // 1. declaramos una funcion que es un funcion Controladora de Evento.
  function handleClick() {
    alert("Boton presionado!");
  }

  return (
    <>
      {/* 2. pasamos la funcion controladora de evento como una prop.*/}
      <button onClick={handleClick}>No hago nada</button>
    </>
  );
}

function Button2() {
  return (
    <>
      <button
        onClick={function handleClick() {
          alert("Enviado!. con forma 2");
        }}
      >
        Enviar
      </button>
    </>
  );
}

function Button3() {
  return (
    <>
      <button onClick={() => alert("PDF generado. Con forma 3")}>
        Generar PDF
      </button>
    </>
  );
}
