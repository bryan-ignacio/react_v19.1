export default function Avatar({ person, size }) {
  return (
    <>
      <img
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
