const InputField = (props) => {
  return (
    <div className="form__item">
      <label htmlFor={props.for}>{props.label}</label>
      <input
        type={props.type || text}
        id={props.id}
        ref={props.innerRef}
        value={props.value}
        placeholder={props.placeholder}
        minLength={props.minL || 5}
        maxLength={props.maxL || 30}
        name={props.name}
        readOnly
      />
    </div>
  );
};

export default InputField;
