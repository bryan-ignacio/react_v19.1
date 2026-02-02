import { useReducer } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";
import messengerReducer from "./messengerReducer";
import { initialState } from "./messengerReducer";

/**
 Limpiar el input al enviar un mensaje
    actualmente, si presiona ENVIAR no pasa nada. agrega un controlador de evento al boton de ENVIAR  que va a:
    1. mostrar un alert con el correo del destinatario y el mensaje.
    2. limpiar el input del mensaje.
 */

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
