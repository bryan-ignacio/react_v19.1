export default function Profile({ person, size }) {
  const estilos = {
    margin: "20px",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid white",
  };

  return (
    <>
      <section style={estilos}>
        <h2>{person.nombre}</h2>
        <img
          src={getImageUrl(person.imageId)}
          alt={person.nombre}
          width={size}
          height={size}
          style={{ borderRadius: "50%" }}
        />
        <ul>
          <li>
            <b>Profesión: </b>
            {person.profesion}
          </li>
          <li>
            <b>Premios: {person.premios.length} </b>({person.premios.join(", ")}
            )
          </li>
          <li>
            <b>Descubrió: </b>
            {person.descubrimientos}
          </li>
        </ul>
      </section>
    </>
  );
}

function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
