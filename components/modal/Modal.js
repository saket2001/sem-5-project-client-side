import React, { useState } from "react";
import styles from "./modal.module.css";
import Button from "../assets/button/Button";

const Modal = ({ title, body, buttonText, onClick }) => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modal_container}>
        <div className={styles.modal}>
          <div className={styles.modal__head}>
            <h1>{title}</h1>
          </div>
          <div className={styles.modal__body}>
            <p>{body}</p>
          </div>
          <div className={styles.modal__button}>
            <Button type="button" onClick={onClick}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
