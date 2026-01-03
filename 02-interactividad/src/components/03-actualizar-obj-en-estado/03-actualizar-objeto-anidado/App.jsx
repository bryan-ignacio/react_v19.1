import { useState } from "react";

/*
    Actualizar una variable de estado que sea un objeto anidado(con varios objetos)
*/
export default function App() {
  return (
    <>
      <h1>Actualizar Objeto Anidado</h1>
      <Form />
    </>
  );
}

function Form() {
  const [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Nana azul",
      city: "Hamburgo",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
      artwork: {
        ...person.artwork,
        [e.target.name]: e.target.value,
      },
    });
  }

  return (
    <>
      <label>Nombre: </label>
      <input
        name="name"
        value={person.name}
        type="text"
        onChange={handleChange}
      />
      <br />
      <label>Titulo: </label>
      <input
        name="title"
        value={person.artwork.title}
        type="text"
        onChange={handleChange}
      />
      <br />
      <label>Ciudad: </label>
      <input
        name="city"
        value={person.artwork.city}
        type="text"
        onChange={handleChange}
      />
      <br />
      <label>Imagen: </label>
      <input
        name="image"
        value={person.artwork.image}
        type="text"
        onChange={handleChange}
      />
      <p>
        {person.artwork.title} por {person.name} <br />
        (situada en {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}
