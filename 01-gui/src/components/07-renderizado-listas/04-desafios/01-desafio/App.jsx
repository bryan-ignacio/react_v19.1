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

  const nodosJXS = quimicos.map((quimico) => (
    <li key={quimico.id}>
      <img src={getImageUrl(quimico)} alt={quimico.name} />
      <p>
        <b>{quimico.name}:</b>
        {" " + quimico.profession + " "}
        conocido/a por {quimico.accomplishment}
      </p>
    </li>
  ));

  const noquimicos = people.filter((person) => person.profession !== "químico");

  const nodosJSXPersonas = noquimicos.map((noquimico) => (
    <li key={noquimico.id}>
      <img src={getImageUrl(noquimico)} alt={noquimico.name} />
      <p>
        <b>{noquimico.name}:</b>
        {" " + noquimico.profession + " "}
        conocido/a por {noquimico.accomplishment}
      </p>
    </li>
  ));

  return (
    <>
      <h1>Científicos</h1>
      <article>
        <section style={{ border: "0.3px solid white", marginBottom: "10px" }}>
          <h2>Quimicos</h2>
          <ul>{nodosJXS}</ul>
        </section>
        <section style={{ border: "0.3px solid white" }}>
          <h2>Todos los demás.</h2>
          <ul>{nodosJSXPersonas}</ul>
        </section>
      </article>
    </>
  );
}

function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
