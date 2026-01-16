import { useState } from "react";

export default function App() {
  // se mantiene el valor de la respuesta entre rendeizados.
  const [answer, setAnswer] = useState("");
  // guarda el error
  const [error, setError] = useState(null);
  // guarda el estado de la iu.
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h1>¡Correcto!</h1>;
  }

  async function handleSubmit(e) {
    // evita que se recargue la pagina cuando se envia.
    e.preventDefault();
    //actualizamos el estado de status con submitting.
    setStatus("submitting");
    // vamos a manejar el error, atrapandolo con try.. catch.
    try {
      //esperamos la evaluacion de la funcion
      await submitForm(answer);
      // si se resuelve entonces seguira con la siguiente linea.
      // actualizara el estado a success
      // de lo contrario atrapar el error y ejecutara lo de abajo.
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>Cuestionario sobre ciudades</h2>
      <p>¿En qué ciudad hay un cartel que convierte el aire en agua potable?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Enviar
        </button>
        {error !== null && <p style={{ color: "red" }}>{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(
          new Error("Buen intento, pero incorrecto. ¡Inténtalo de nuevo!")
        );
      } else {
        resolve();
      }
    }, 1500);
  });
}
