import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // Este estado es redundante ya que se puede calcular con los dos estados anteriores.
  //const [fullName, setFullName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    // setFullName(e.target.value + " " + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    //setFullName(firstName + " " + e.target.value);
  }

  return (
    <>
      <h2>Vamos a registrarte</h2>
      <label>
        Nombre: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <br />
      <label>
        Apellido: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        {/* Su boleto será emitido a:<b>{fullName}</b> */}
        Su boleto sera emitido a :{" "}
        <b>
          {firstName} {lastName}
        </b>
      </p>
    </>
  );
}
