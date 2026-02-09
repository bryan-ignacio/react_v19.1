import Heading from "./Heading";
import Section from "./Section";

export default function App() {
  return (
    <>
      <Section level={1}>
        <Heading>Encabezado</Heading>
        <Heading>Encabezado</Heading>
        <Heading>Encabezado</Heading>
      </Section>

      <Section level={3}>
        <Heading>Este es un encabezado</Heading>
        <Heading>Este es un encabezado</Heading>
        <Heading>Este es un encabezado</Heading>
      </Section>
    </>
  );
}
