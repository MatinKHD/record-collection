import { useRef } from "react";
import uniqid from "uniqid";

function Input({ type, labelText, ...props }) {
  const id = useRef(uniqid()).current;

  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      {type === "text" && <input type="text" id={id} {...props} />}
      {type === "textarea" && <textarea id={id} {...props} />}
    </>
  );
}

export default Input;
