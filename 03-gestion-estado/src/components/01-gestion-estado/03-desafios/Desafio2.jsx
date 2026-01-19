import { useState } from "react";

export default function EditProfile() {
  const [person, setPerson] = useState({
    firstName: "Jane",
    lastName: "Jacobs",
  });

  const [habilitado, setHabilitado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setHabilitado(!habilitado);
  }

  function handleNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  if (habilitado) {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Nombre: <b>{person.firstName}</b>
        </label>
        <br />
        <br />
        <label>
          Apellido: <b>{person.lastName}</b>
        </label>
        <br />
        <br />
        <button type="submit">Editar Perfil</button>
        <p>
          <i>
            ¡Hola, {person.firstName} {person.lastName}!
          </i>
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre: <b>{habilitado && person.firstName}</b>
        <input value={person.firstName} onChange={handleNameChange} />
      </label>
      <br />
      <br />
      <label>
        Apellido: <b>{habilitado && person.lastName}</b>
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <br />
      <button type="submit">Guardar Perfil</button>
      <p>
        ¡Hola, {person.firstName} {person.lastName}!
      </p>
    </form>
  );
}
