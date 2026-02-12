export function funcionReducer(tasks, action) {
  switch (action.type) {
    case "1": {
      return;
    }
    case "2": {
      return;
    }
    case "3": {
      return;
    }
    default:
      throw Error("accion no encontrada: " + action.type);
  }
}
