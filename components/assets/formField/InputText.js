import React from "react";

import styles from "../assets.module.css";

const InputText = (props) => {
  return (
    <div className={styles.form__item}>
      <label htmlFor={props.for}>{props.label}</label>
      <textarea
        id={props.id}
        ref={props.ref}
        rows={props.rows}
        cols={props.cols}
        required
      />
    </div>
  );
};

export default InputText;
