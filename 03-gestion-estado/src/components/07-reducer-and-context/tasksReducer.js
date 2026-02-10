/**
 * recibe dos parametros el estado actual y el objeto accion.
 * para retornar el siguiente estado.
 *
 * los parametros se los manda el hook al utilizarlo en el Componente.
 *
 * sabemos que tasks es el estado que es un arreglo de objetos de tareas que tiene el siguiente formato
 * {id:--,text:--, done:--}
 * cada objeto action recibe distintos valores dependiendo el type.
 */
export default function taskReducer(tasks, action) {
  switch (action.type) {
    // retorna el siguiente estado(array) con la nueva tarea agregada al final.
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }

    // retorna el siguiente estado(array) con la tarea actualizada.
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        }
        return t;
      });
    }

    // retorna el siguiente estado (array) con la tarea eliminada.
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    // si el caso no existe retornara un error.
    default:
      throw Error("Accion no encontrada: " + action.type);
  }
}

/*
useContext le dice a react que este componente quiere leer el contexto.
*/

/*
 Si cualquier componente adentro de este <Section> pregunta por levelContext
 enviale este valor level.
 */
