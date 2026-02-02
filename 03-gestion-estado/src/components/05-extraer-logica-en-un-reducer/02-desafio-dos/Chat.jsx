//import { useState } from "react";

export default function Chat({ contact, message, dispatch }) {
  function handleClick() {
    alert(`Enviar mensaje a ${contact.email}: ${message}`);
    dispatch({
      type: "sent_message",
    });
  }

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={"Chatear con " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <br />
      <button onClick={handleClick}>Enviar a {contact.email}</button>
    </section>
  );
}
