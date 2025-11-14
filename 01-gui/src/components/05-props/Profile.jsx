export default function Profile() {
  const persona = {
    name: "Lin Lanying",
    imageId: "1bX5QH6",
  };

  // vamos a asignar dos props al componente Hijo.

  return (
    <>
      <h1>Profile</h1>
      <Avatar person={persona} size={100} />
    </>
  );
}

//accedemos a las props con desestructuracion.
function Avatar({ person, size }) {
  //ahora podemos acceder a los valores de las variables dentro de la funcion.

  return (
    <>
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </>
  );
}

function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
