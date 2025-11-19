const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "matemática",
    accomplishment: "los cálculos de vuelos espaciales",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "químico",
    accomplishment: "el descubrimiento del agujero de ozono en el Ártico",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "físico",
    accomplishment: "la teoría del electromagnetismo",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "químico",
    accomplishment:
      "ser pionero en el uso de cortisona, esteroides y píldoras anticonceptivas",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrofísico",
    accomplishment: "los cálculos de masa de estrellas enanas blancas",
    imageId: "lrWQx8l",
  },
];

export default function App() {
  const quimicos = people.filter((quimico) => quimico.profession === "químico");

  const nodosJsx = quimicos.map((quimico) => (
    <li>
      <img src={getImageUrl(quimico)} alt={quimico.name} />
      <p>
        <b>{quimico.name}</b>
        {" " + quimico.profession + " "}
        conocido/a por {quimico.accomplishment}
      </p>
    </li>
  ));

  return (
    <>
      <h2>App</h2>
      <ul>{nodosJsx}</ul>
    </>
  );
}

function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
