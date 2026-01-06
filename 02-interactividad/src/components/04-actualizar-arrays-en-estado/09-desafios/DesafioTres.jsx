/*
Desafío 3 de 4: Repara las mutaciones usando métodos que no muten 
En este ejemplo, todos los controladores de eventos en App.js usan mutación.
Como resultado, la edición y eliminación de tareas no funciona. 
Vuelve a escribir handleAddTodo, handleChangeTodo y
handleDeleteTodo para usar los métodos no que no realicen mutaciones:
*/
import { useState } from "react";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Comprar leche", done: true },
  { id: 1, title: "Comer tacos", done: false },
  { id: 2, title: "Preparar té", done: false },
];

export default function DesafioTres() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    let newTodos = [{ id: nextId + 1, title: title, done: false }, ...todos];
    setTodos(newTodos);
  }

  function handleChangeTodo(nextTodo) {
    let todosUpdate = todos.map((todo) => {
      if (todo.id === nextTodo.id) {
        return { ...todo, title: nextTodo.title, done: nextTodo.done };
      } else {
        return todo;
      }
    });
    setTodos(todosUpdate);
  }

  function handleDeleteTodo(todoId) {
    let todosUpdate = todos.filter((todo) => todo.id !== todoId);
    setTodos(todosUpdate);
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="Agregar tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Agregar
      </button>
    </>
  );
}

function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Guardar</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title} <button onClick={() => setIsEditing(true)}>Editar</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
      />
      {todoContent} <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </label>
  );
}
