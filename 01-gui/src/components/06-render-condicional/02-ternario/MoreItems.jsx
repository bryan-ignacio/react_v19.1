export default function MoreItems() {
  return (
    <>
      <PackingList />
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
          <Item name={"Casco con dorado a la hoja"} isPacked={false} />
          <Item name={"Fotografía de Tam"} isPacked={true} />
        </ul>
      </section>
    </>
  );
}

function Item({ name, isPacked }) {
  return (
    <>
      <li>{isPacked ? <del>{name} + "✅"</del> : name}</li>
    </>
  );
}
