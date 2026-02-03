export default function Chat({ message, contact }) {
  return (
    <>
      <textarea>{message}</textarea>
      <br />
      <button>Enviar a {contact.email}</button>
    </>
  );
}
