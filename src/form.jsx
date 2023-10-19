import { useState } from "react";

const initialFormValue = {
  recordName: "",
  artistName: "",
  description: "",
};
function Form() {
  const [inputValue, setInputValue] = useState(initialFormValue);

  function onFormSubmitHandler(e) {
    e.preventDefault();
    console.log(inputValue);
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
        <label htmlFor="artistName">ArtistName:</label>
        <input
          type="text"
          placeholder="enter artist name"
          name="artistName"
          id="artistName"
          onChange={onInputChangeHandler}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default Form;
