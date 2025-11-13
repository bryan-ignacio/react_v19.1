function formatDate(date) {
  return new Intl.DateTimeFormat("es-ES", { weekday: "long" }).format(date);
}

export default function TodoList() {
  const today = new Date();

  return (
    <>
      <h2>Del {formatDate(today)}</h2>
      <ul
        style={{
          backgroundColor: "black",
          color: "teal",
        }}
      >
        <li>Mejorar el videoteléfono</li>
        <li>Preparar clases de aeronáutica</li>
        <li>Trabajar en el motor de alcohol</li>
      </ul>
    </>
  );
}
