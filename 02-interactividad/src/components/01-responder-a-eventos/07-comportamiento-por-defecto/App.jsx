export default function App() {
  return (
    <>
      <SignUp />
    </>
  );
}

function SignUp() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Nombre enviado!");
  }

  return (
    <>
      <div style={{ backgroundColor: "gray", padding: "20px" }}>
        <h3>SignUp</h3>
        <form onSubmit={handleSubmit}>
          <input />
          <button>Enviar</button>
        </form>
      </div>
    </>
  );
}
