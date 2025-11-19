const people = [
  {
    id: 0, // Usado en JSX como key
    name: "Creola Katherine Johnson",
    profession: "matemática",
    accomplishment: "los cálculos de vuelos espaciales",
    imageId: "MK3eW3A",
  },
  {
    id: 1, // Usado en JSX como key
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "químico",
    accomplishment: "el descubrimiento del agujero de ozono en el Ártico",
    imageId: "mynHUSa",
  },
  {
    id: 2, // Usado en JSX como key
    name: "Mohammad Abdus Salam",
    profession: "físico",
    accomplishment: "la teoría del electromagnetismo",
    imageId: "bE7W1ji",
  },
  {
    id: 3, // Usado en JSX como key
    name: "Percy Lavon Julian",
    profession: "químico",
    accomplishment:
      "ser pionero en el uso de cortisona, esteroides y píldoras anticonceptivas",
    imageId: "IOjWm71",
  },
  {
    id: 4, // Usado en JSX como key
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrofísico",
    accomplishment: "los cálculos de masa de estrellas enanas blancas",
    imageId: "lrWQx8l",
  },
];

export default function App() {
  const nodosJSX = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}</b> <br />
        {person.profession} conocido/a por {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <>
      <section>
        <ul>{nodosJSX}</ul>
      </section>
    </>
  );
}

/*
Hay que darle a cada elemento del array una key que sea un id unico entre todos los elementos del array.
los elementos JSX dentro de un map() necesitan siempre una key.
 */
function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
