import React from "react";

import styles from "../assets.module.css";

const InputCheckbox = (props) => {
  return (
    <label className={styles.container} htmlFor={props.for}>
      {props.label}
      <input type="checkbox" name={props.name} id={props.id} ref={props.ref} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default InputCheckbox;

// <div
//   className={styles.form__item}
//   style={{
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     padding: "0",
//   }}
// >
//   <input type="checkbox" name="" id={props.id} ref={props.ref} />
//   <label htmlFor={props.for} style={{ margin: "0 0.5rem" }}>
//     {props.label}
//   </label>
// </div>;
