import Section from "./section";

function Container() {
  const headTxt =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, voluptas! Quas sed odit obcaecati! Illo, provident.";
  return (
    <>
      <Section headingLevel={2} headingText={headTxt}>
        <p>section child</p>
      </Section>
    </>
  );
}

export default Container;
