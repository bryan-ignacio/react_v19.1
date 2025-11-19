import { people } from "./people";

const quimicos = [];
const otros = [];

people.forEach((people) => {
  if (people.profession === "químico") {
    quimicos.push(people);
  } else {
    otros.push(people);
  }
});

function List({ people, title }) {
  return (
    <article>
      <h1>{title}</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              conocido/a por {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Forma2() {
  return (
    <>
      <section>
        <h1>Cientificos</h1>
        <List people={quimicos} title={"Químicos"} />
        <List people={otros} title={"Todos los demas."} />
      </section>
    </>
  );
}

function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
