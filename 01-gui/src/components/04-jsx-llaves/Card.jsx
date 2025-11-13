export default function Card() {
  const person = {
    url: "https://i.imgur.com/7vQD0fPs.jpg",
    fullname: "Gregorio Y. Zara",
  };
  const estiloCard = {
    width: "200px",
    height: "300px",
    background: "white",
    borderR: "12px",
    centrado: "center",
  };
  return (
    <>
      <div
        style={{
          display: "inline-block",
          width: estiloCard.width,
          height: estiloCard.height,
          backgroundColor: estiloCard.background,
          borderRadius: estiloCard.borderR,
          textAlign: estiloCard.centrado,
          alignContent: estiloCard.centrado,
        }}
      >
        <img
          src={person.url}
          alt={person.fullname}
          style={{
            display: "inline-block",
            borderRadius: estiloCard.borderR,
          }}
        />
        <p style={{ color: "black" }}>{person.fullname}</p>
      </div>
    </>
  );
}
