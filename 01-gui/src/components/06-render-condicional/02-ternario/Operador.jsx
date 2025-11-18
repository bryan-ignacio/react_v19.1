export default function Operador() {
  return (
    <>
      <PackingList />
    </>
  );
}

function Item({ isPacked, name }) {
  return (
    <>
      <li>{isPacked ? name + "✅" : name}</li>
    </>
  );
}

function PackingList() {
  return (
    <>
      <section>
        <h1>Lista de equipaje de Sally Ride</h1>
        <ul>
          <Item name={"objeto 1"} isPacked={true} />
          <Item name={"objeto 2"} isPacked={true} />
          <Item name={"objeto 3"} isPacked={false} />
        </ul>
      </section>
    </>
  );
}
