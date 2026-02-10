export default function TaskList({ tasks }) {
  return (
    <>
      <ul>
        {tasks.map((task) => {
          return (
            <li>
              <input type="checkbox" />
              <label>{task.text}</label>
              <button>Editar</button>
              <button>Borrar</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
