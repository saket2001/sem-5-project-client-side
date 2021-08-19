import React from "react";
import styles from "./verified.module.css";
import { FaCheck } from "react-icons/fa";

const VerifiedTag = ({ message }) => {
  return (
    <div className={styles.tag_container}>
      {<FaCheck style={{ color: "#CB3514" }} />}
      <p>{message}</p>
    </div>
  );
};

export default VerifiedTag;
