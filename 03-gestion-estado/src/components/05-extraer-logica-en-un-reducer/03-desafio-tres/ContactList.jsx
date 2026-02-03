export default function ContactList({ contacts, contact }) {
  return (
    <>
      <ul>
        {contacts.map((c) => {
          return (
            <li>
              <button>{contact.id === c.id ? <b>{c.name}</b> : c.name}</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
