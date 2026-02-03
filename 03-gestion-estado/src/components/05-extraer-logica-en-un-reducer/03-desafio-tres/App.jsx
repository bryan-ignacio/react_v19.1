import { useReducer } from "react";
import messengerReducer from "./messengerReducer";
import ContactList from "./ContactList";
import Chat from "./Chat";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@example.com" },
  { id: 1, name: "Alice", email: "cris@example.com" },
  { id: 2, name: "Bob", email: "ada@example.com" },
];

const initialState = {
  selectedId: 0,
  messages: {
    0: "Hola Taylor",
    1: "Hola Alice",
    2: "Hola Bob",
  },
};

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  // obtenemos el mensaje y el contacto seleccionado (usar selectedId de forma consistente)
  const message = state.messages[state.selectedId];
  const contact = contacts.find((contact) => contact.id === state.selectedId);
  return (
    <>
      <div>
        <ContactList
          contacts={contacts}
          selectedId={state.selectedId}
          dispatch={dispatch}
        />
        <Chat
          //   key={contact.id}
          message={message}
          contact={contact}
          dispatch={dispatch}
        />
      </div>
    </>
  );
}
