export function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }

    case "changed": {
      return tasks.map((task) => {
        if (task.id === action.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }

    case "deleted": {
      return tasks.filter((task) => task.id !== action.taskId);
    }

    default:
      throw Error("accion no encontrada: " + action.type);
  }
}

//{id, text, done}
