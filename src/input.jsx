import { useRef } from "react";
import uniqid from "uniqid";

import "./input.css";

function Input({ type, labelText, ...props }) {
  const id = useRef(uniqid()).current;

  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      {type === "text" && <input type="text" id={id} {...props} />}
      {type === "textarea" && <textarea id={id} {...props} />}
    </div>
  );
}

export default Input;
