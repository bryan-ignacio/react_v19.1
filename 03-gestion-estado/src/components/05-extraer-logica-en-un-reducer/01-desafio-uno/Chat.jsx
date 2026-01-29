import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chatear con " + contact.name}
        onChange={(e) => {
          // TODO: Despachar edited_message
          // (Lee el valor del input en e.target.value)
        }}
      />
      <br />
      <button>Enviar a {contact.email}</button>
    </section>
  );
}
