import Section from "./section";
import Form from "./form";

function Container() {
  const headTxt =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, voluptas! Quas sed odit obcaecati! Illo, provident.";

  function onFormSubmitHandler(value) {
    console.log(value);
  }
  return (
    <>
      <Section headingLevel={2} headingText={headTxt}>
        <Form onSubmit={onFormSubmitHandler} />
      </Section>
    </>
  );
}

export default Container;
