export default function ContactList({ contacts }) {
  return (
    <>
      <ul>
        {contacts.map((c) => {
          return (
            <li>
              <button>{c.name}</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
