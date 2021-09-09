import React from "react";

import styles from "../assets.module.css";

const InputField = (props) => {
  return (
    <div className={styles.form__item}>
      <label htmlFor={props.for}>{props.label}</label>
      <input
        type={props.type || text}
        id={props.id}
        ref={props.ref}
        value={props.value}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
};

export default InputField;
