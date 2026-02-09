import Heading from "./Heading";
import Section from "./Section";

export default function App() {
  return (
    <>
      <Section>
        <Heading>Titulo</Heading>
        <Section>
          <Heading>Encabezado</Heading>
          <Heading>Encabezado</Heading>
          <Heading>Encabezado</Heading>
          <Section>
            <Heading>Sub-Encabezado</Heading>
            <Heading>Sub-Encabezado</Heading>
            <Heading>Sub-Encabezado</Heading>
            <Section>
              <Heading>Sub-Sub-Encabezado</Heading>
              <Heading>Sub-Sub-Encabezado</Heading>
              <Heading>Sub-Sub-Encabezado</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </>
  );
}
