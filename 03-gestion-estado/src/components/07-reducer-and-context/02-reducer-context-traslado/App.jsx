import { ContextProvider } from "./TasksContext";

export default function TaskApp() {
  return (
    <>
      <TasksProvider>
        <h1>TaskApp</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  );
}
