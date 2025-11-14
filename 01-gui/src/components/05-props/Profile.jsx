export default function Profile({ persona, tam }) {
  // vamos a asignar dos props al componente Hijo.

  return (
    <>
      <h1>Profile</h1>
      <Avatar p={persona} size={tam} />
    </>
  );
}

//accedemos a las props con desestructuracion.
function Avatar({ p, size }) {
  //ahora podemos acceder a los valores de las variables dentro de la funcion.

  return (
    <>
      <img
        className="avatar"
        src={getImageUrl(p)}
        alt={p.name}
        width={size}
        height={size}
      />
    </>
  );
}

function getImageUrl(person, size = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
