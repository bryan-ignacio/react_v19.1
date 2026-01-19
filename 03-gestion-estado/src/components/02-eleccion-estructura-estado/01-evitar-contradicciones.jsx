import { useState } from "react";

export default function FeedbackForm() {
  // estado del textarea
  const [text, setText] = useState("");
  // estado que se esta enviando.
  const [isSending, setIsSending] = useState(false);
  // estado del envio
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    // si no actualizamos el estado entonces sending y sent son true lo cual no puede ocurrir.
    // no puede estar enviandose y a la vez enviado.
    // Entonces como isSending y isSent no pueden ser true al mismo tiempo es mejor reemplazar
    // con variable de estado status que puede tomar uno de tres estados validos: "typing", "sending",  "sent"
    // con esto en mente solo podria ser una cosa o otra. no caeria en ambiguedad.
    setIsSending(false);
    setIsSent(true);
  }

  //si ya se envio entonces
  if (isSent) {
    return <h1>¡Gracias por tu retroalimentación!</h1>;
  }

  //de lo contrario renderiza este jsx.
  return (
    <form onSubmit={handleSubmit}>
      <p>¿Cómo fue tu estadía en El Poney Pisador?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button disabled={isSending} type="submit">
        Enviar
      </button>
      {isSending && <p>Enviando...</p>}
    </form>
  );
}

// Pretender enviar un mensaje.
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
