export default function Form({ status }) {
  if (status === "success") {
    return <h2>¡Correcto!</h2>;
  }
  return (
    <>
      <form>
        <textarea disabled={status === "submitting"}></textarea>
        <br />
        <button disabled={status === "empty" || status === "submitting"}>
          Enviar
        </button>
      </form>
      {status === "error" && (
        <p style={{ color: "red" }}>
          Buen intento, pero incorrecto. ¡Inténtalo de nuevo!
        </p>
      )}
    </>
  );
}
