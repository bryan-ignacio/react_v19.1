import TodoList from "./Todolist";

export default function App() {
  const name = "Bryan Ignacio";
  return (
    <>
      <h1>Lista de tareas pendientes de {name}</h1>
      <TodoList />
    </>
  );
}
