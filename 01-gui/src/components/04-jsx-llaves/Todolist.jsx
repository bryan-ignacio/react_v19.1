function formatDate(date) {
  return new Intl.DateTimeFormat("es-ES", { weekday: "long" }).format(date);
}

export default function TodoList() {
  const today = new Date();

  return (
    <>
      <h2>Del {formatDate(today)}</h2>
    </>
  );
}
