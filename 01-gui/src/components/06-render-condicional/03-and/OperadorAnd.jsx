export default function OperadorAnd() {
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
          <Item name={"Casco con dorado a la hoja"} isPacked={true} />
          <Item name={"Fotografía de Tam"} isPacked={false} />
        </ul>
      </section>
    </>
  );
}

function Item({ name, isPacked }) {
  return (
    <>
      <li>
        {name} {isPacked && "✅"}
      </li>
    </>
  );
}
