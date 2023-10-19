import { useState } from "react";

import Input from "./input";

const initialFormValue = {
  recordName: "",
  artistName: "",
  description: "",
};
function Form({ onSubmit }) {
  const [inputValue, setInputValue] = useState(initialFormValue);

  function onFormSubmitHandler(e) {
    e.preventDefault();
    onSubmit(inputValue);
  }
  function onInputChangeHandler(e) {
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
          id="artistName"
          labelText="Artist Name"
          key="artistName"
          placeholder="enter artist name"
          name="artistName"
          onChange={onInputChangeHandler}
        />
        <Input
          type="text"
          id="recordName"
          labelText="Record Name"
          key="recordName"
          placeholder="enter record name"
          name="recordName"
          onChange={onInputChangeHandler}
        />
        <Input
          type="textarea"
          id="description"
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
