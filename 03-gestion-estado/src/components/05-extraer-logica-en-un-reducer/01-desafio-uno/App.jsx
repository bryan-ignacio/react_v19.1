import { useReducer } from "react";
import ContactList from "./ContactList";
import Chat from "./Chat";
import { messengerReducer } from "./messengerReducer";

const initialState = {
  selectedId: 0,
  message: "Hola",
};

export default function Messenger() {
  // declaro el hook useReducer(reducer, estado)
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  // declaro una cte que contendra el estado y accedo al mensaje.
  const message = state.message;
  // declaro una cte contacto que contendra el contacto encontrado apartir del id y el del id del estado.
  const contact = contacts.find((c) => c.id === state.selectedId);

  /*
   que retorna el jsx.
   - un Componente ContactList (contenra los contactos, el id seleccionado, dispatch el despachador de accion)
   - un Componente Chat (las propiedades key, message, contact, dispatch)
   */
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
