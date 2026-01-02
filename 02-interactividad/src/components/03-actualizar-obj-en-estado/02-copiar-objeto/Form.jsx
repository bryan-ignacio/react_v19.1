import { useState } from "react";

export default function Form() {
  return (
    <>
      <h1>Copy Object best option</h1>
      <section>
        <Content />
      </section>
    </>
  );
}

function Content() {
  const [person, setPerson] = useState({
    name: "Name",
    lastName: "Last Name",
    email: "person@gmail.com",
  });

  function handleChange(e) {
    setPerson({
      ...person,
      //name del input targeteado: valor mando por el input
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <label>Name: </label>
      <input
        name="name"
        value={person.name}
        type="text"
        onChange={handleChange}
      />
      <br />
      <label>LastName: </label>
      <input
        name="lastName"
        value={person.lastName}
        type="text"
        onChange={handleChange}
      />
      <br />
      <label>Email: </label>
      <input
        name="email"
        value={person.email}
        type="text"
        onChange={handleChange}
      />
      <p>
        {person.name} {person.lastName} ({person.email})
      </p>
    </>
  );
}
