function Tarjeta({ person, size, isSepia, thickBorder }) {
  return (
    <div>
      <Caja
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
//En lugar de hacer lo de arriba podemos mandar todas las props con el operador spread.
function Tarjeta(props) {
  return (
    <div>
      <Caja {...props} />
    </div>
  );
}
