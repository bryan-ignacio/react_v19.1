export default function ContactList({ contacts, selectedId, dispatch }) {
  function handleClick(contactId) {
    dispatch({
      type: "changed_selection",
      contactId: contactId,
    });
  }
  return (
    <>
      <ul>
        {contacts.map((c) => {
          return (
            <li>
              <button onClick={() => handleClick(c.id)}>
                {selectedId === c.id ? (
                  <b style={{ color: "black" }}>{c.name}</b>
                ) : (
                  c.name
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
