export default function List() {
  const people = [
    "Creola Katherine Johnson: matemática",
    "Mario José Molina-Pasquel Henríquez: químico",
    "Mohammad Abdus Salam: físico",
    "Percy Lavon Julian: químico",
    "Subrahmanyan Chandrasekhar: astrofísico",
  ];
  const listItems = people.map((person) => <li>{person}</li>);

  return (
    <>
      <h2>People</h2>
      <ul>{listItems}</ul>
    </>
  );
}
