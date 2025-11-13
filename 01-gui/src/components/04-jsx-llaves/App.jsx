import TodoList from "./Todolist";
import Card from "./Card";

export default function App() {
  const name = "Bryan Ignacio";
  return (
    <>
      <h1>Lista de tareas pendientes de {name}</h1>
      <TodoList />
      <Card />
    </>
  );
}
