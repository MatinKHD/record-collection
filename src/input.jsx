function Input({ type, id, labelText, ...props }) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      {type === "text" && <input type="text" id={id} {...props} />}
      {type === "textarea" && <textarea id={id} {...props} />}
    </>
  );
}

export default Input;
