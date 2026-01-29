export default function tasksReducer(tasks, action) {
  switch (action.type) {
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

    case "changed": {
      return tasks.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        } else {
          return item;
        }
      });
    }
    case "deleted": {
      return tasks.filter((item) => item.id !== action.id);
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}
