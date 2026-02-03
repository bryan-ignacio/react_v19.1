export default function Chat({ message, contact, dispatch }) {
  function handleChange(e) {
    dispatch({
      type: "edited_message",
      message: e.target.value,
    });
  }

  function handleClick() {
    alert(`Enviando "${message}" a ${contact.email}`);
    dispatch({
      type: "sent_message",
    });
  }

  return (
    <>
      <textarea
        value={message}
        onChange={handleChange}
        placeholder={`chatear con ${contact.name}`}
      ></textarea>
      <br />
      <button onClick={handleClick}>Enviar a {contact.email}</button>
    </>
  );
}
