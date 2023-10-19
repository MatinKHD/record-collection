import { useState } from "react";
import uniqid from "uniqid";

import Input from "./input";

const initialFormValue = {
  recordId: "",
  recordName: "",
  artistName: "",
  description: "",
};
function Form({ onSubmit }) {
  const [inputValue, setInputValue] = useState(initialFormValue);

  function onFormSubmitHandler(e) {
    e.preventDefault();
    const id = uniqid();
    onSubmit({
      ...inputValue,
      recordId: id,
    });
  }

  function onInputChangeHandler(e) {
    console.log(e.target.id);
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <form onSubmit={onFormSubmitHandler}>
        <Input
          type="text"
          labelText="Artist Name"
          key="artistName"
          placeholder="enter artist name"
          name="artistName"
          onChange={onInputChangeHandler}
        />
        <Input
          type="text"
          labelText="Record Name"
          key="recordName"
          placeholder="enter record name"
          name="recordName"
          onChange={onInputChangeHandler}
        />
        <Input
          type="textarea"
          labelText="Description"
          key="description"
          placeholder="enter some description"
          name="description"
          onChange={onInputChangeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Form;
