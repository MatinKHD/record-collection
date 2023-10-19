import Section from "./section";
import Form from "./form";

function Container() {
  const headTxt =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, voluptas! Quas sed odit obcaecati! Illo, provident.";
  return (
    <>
      <Section headingLevel={2} headingText={headTxt}>
        <Form />
      </Section>
    </>
  );
}

export default Container;
