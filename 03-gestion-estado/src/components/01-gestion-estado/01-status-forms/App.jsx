import Form from "./Form";

export default function App() {
  let statuses = ["empty", "typing", "submitting", "success", "error"];
  return (
    <>
      {statuses.map((status) => {
        return (
          <section key={status}>
            <h4>Form ({status}): </h4>
            <Form status={status} />
            <hr />
          </section>
        );
      })}
    </>
  );
}
