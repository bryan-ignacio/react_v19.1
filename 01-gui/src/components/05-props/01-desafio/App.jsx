import Profile from "./Profile";

export default function App() {
  return (
    <>
      <Gallery />
    </>
  );
}

function Gallery() {
  const c1 = {
    nombre: "Maria Skłodowska-Curie",
    imageId: "szV5sdG",
    profesion: "física y química",
    premios: [
      "Premio Nobel de Física",
      "Premio Nobel de Química",
      "Medalla Davy",
      "Medalla Matteucci",
    ],
    descubrimientos: ["polonio (elemento químico)"],
  };

  const c2 = {
    nombre: "Katsuko Saruhashi",
    imageId: "YfeOqp2",
    profesion: "geoquímica",
    premios: ["Premio Miyake de geoquímica", "Premio Tanaka"],
    descubrimientos: [
      "un método para medir el dióxido de carbono en el agua de mar",
    ],
  };

  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile person={c1} size={70} />
      <Profile person={c2} size={70} />
    </div>
  );
}
