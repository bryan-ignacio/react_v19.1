import { useState } from "react";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setAnswer(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("submiting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error);
    }
  }
  if (status === "success") {
    return <h1>¡Correcto!</h1>;
  } else {
    return (
      <>
        <section>
          <h4>Cuestionario sobre ciudades</h4>
          <p>¿En qué Pais tiene una moneda llamada Quetzal?</p>
          <form onSubmit={handleSubmit}>
            <textarea
              value={answer}
              onChange={handleChange}
              disabled={status === "submiting"}
            ></textarea>
            <br />
            <br />
            <button
              type="submit"
              disabled={status === "submiting" || answer.length === 0}
            >
              Enviar
            </button>
          </form>
          {error !== null && <p style={{ color: "red" }}>{error.message}</p>}
        </section>
      </>
    );
  }
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "guatemala";
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
