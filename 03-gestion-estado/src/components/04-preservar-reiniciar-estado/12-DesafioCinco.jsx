/*
Arreglar un estado mal colocado en la lista 
En esta lista, cada Contact tiene un estado que determina si se ha pulsado “Mostrar correo electrónico” para él. Pulsa “Mostrar correo electrónico” para Alice, y luego marca la casilla “Mostrar en orden inverso”. Notarás que ahora es el correo electrónico de Taylor el que está expandido, 
pero el de Alice —que se ha movido a la parte inferior— aparece colapsado.

Arréglalo para que el estado expandido se asocie a cada contacto, independientemente del orden elegido.

*/
import { useState } from "react";

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          value={reverse}
          onChange={(e) => {
            setReverse(e.target.checked);
          }}
        />{" "}
        Mostrar en orden inverso
      </label>
      <ul>
        {displayedContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}

const contacts = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];

function Contact({ contact }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Ocultar" : "Mostrar"} correo electrónico
      </button>
    </>
  );
}
