import { useReducer } from "react";
import messengerReducer from "./messengerReducer";
import ContactList from "./ContactList";
import Chat from "./Chat";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@example.com" },
  { id: 1, name: "Cris", email: "cris@example.com" },
  { id: 2, name: "Ada", email: "ada@example.com" },
];

const initialState = {
  selectId: 0,
  message: "Hola",
};

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  //obtenemos el mensaje y el contacto seleccionado
  const message = state.message;
  const contact = contacts.find((contact) => contact.id === state.selectId);
  return (
    <>
      <div>
        <ContactList
          contacts={contacts}
          contact={contact}
          dispatch={dispatch}
        />
        <Chat message={message} contact={contact} />
      </div>
    </>
  );
}
