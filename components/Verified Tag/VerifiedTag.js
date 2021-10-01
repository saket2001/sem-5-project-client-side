import React from "react";
import styles from "./verified.module.css";
import { FaCheck, FaRegWindowClose } from "react-icons/fa";

const VerifiedTag = ({ message, status }) => {
  return (
    <div className={styles.tag_container}>
      {status && <FaCheck style={{ color: "#CB3514" }} />}
      {!status && <FaRegWindowClose style={{ color: "#CB3514" }} />}
      <p>{message}</p>
    </div>
  );
};

export default VerifiedTag;
