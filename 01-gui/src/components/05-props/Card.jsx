import Avatar from "./Avatar";

function Card({ children }) {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          margin: "0 auto",
          padding: "10px",
          backgroundColor: "#eae0cc",
          borderRadius: "10px",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default function Profile() {
  const person = {
    name: "Aklilu Lemma",
    imageId: "OKS67lh",
  };

  return (
    <>
      <Card>
        <p>{person.name}</p>
        <Avatar person={person} size={120} />
      </Card>
    </>
  );
}
