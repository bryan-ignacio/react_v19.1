export default function App() {
  return (
    <>
      <PackingList />
    </>
  );
}

function Item({ name, isPacked }) {
  if (isPacked) {
    return (
      <>
        <li className="item">{name} ✅</li>
      </>
    );
  }
  return (
    <>
      <li className="item">{name}</li>
    </>
  );
}

function PackingList() {
  return (
    <>
      <section>
        <h1>Lista de equipaje de Sally Ride</h1>
        <ul>
          <Item name={"Traje de vuelo"} isPacked={true} />
          <Item name={"Casco con dorado a la hoja"} isPacked={true} />
          <Item name={"Fotografía de Tam"} isPacked={false} />
        </ul>
      </section>
    </>
  );
}
