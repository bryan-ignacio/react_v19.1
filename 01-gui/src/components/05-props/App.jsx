import Profile from "./Profile";

export default function App() {
  const persona = {
    name: "Lin Lanying",
    imageId: "1bX5QH6",
  };

  return (
    <>
      <h1>hola</h1>
      <Profile person={persona} tam={100} />
    </>
  );
}
