import React from "react";

const InputText = (props) => {
  return (
    <div className="form__item">
      <label htmlFor={props.for}>{props.label}</label>
      <textarea
        id={props.id}
        ref={props.refer}
        rows={props.rows}
        cols={props.cols}
        value={props.value}
        placeholder={props.placeholder}
        name={props.name}
        readOnly
      />
    </div>
  );
};

export default InputText;
