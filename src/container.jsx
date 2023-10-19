import { useState, useRef, useEffect } from "react";

import axios from "axios";

import Section from "./section";
import Form from "./form";
import List from "./list";

function Container() {
  const [records, setRecords] = useState([]);
  const formHeadTxt = "Add Records";
  const listHeadTxt = "Records";
  const isMounted = useRef(true);
  const api = "http://localhost:2000/records";

  function onFormSubmitHandler(value) {
    axios.post(api, value).then(({ data }) => {
      if (isMounted) {
        setRecords([...records, data]);
      }
    });
  }

  useEffect(() => {
    axios.get(api).then(({ data }) => {
      if (isMounted) {
        setRecords(data);
      }
    });
    return () => (isMounted.current = false);
  }, []);

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
