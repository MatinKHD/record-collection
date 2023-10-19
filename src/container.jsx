import { useState } from "react";

import Section from "./section";
import Form from "./form";
import List from "./list";

function Container() {
  const [records, setRecords] = useState([]);
  const formHeadTxt = "Add Records";
  const listHeadTxt = "Records";

  function onFormSubmitHandler(value) {
    setRecords([...records, value]);
  }
  return (
    <>
      <Section headingLevel={2} headingText={formHeadTxt}>
        <Form onSubmit={onFormSubmitHandler} />
      </Section>
      <Section headingLevel={2} headingText={listHeadTxt}>
        <List records={records} />
      </Section>
    </>
  );
}

export default Container;
