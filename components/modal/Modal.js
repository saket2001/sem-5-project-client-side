import React, { useCallback, useState } from "react";
import styles from "./modal.module.css";

const Modal = ({ title, body, buttonText }) => {
  //   const [modalState, setModalState] = useState(false);

  //   const showModal = useCallback(() => {
  //     setModalState((prevState) => !prevState);
  //   }, []);
  const [modalState, setModalState] = useState(false);

  const closeModal = useCallback(() => {
    setModalState(false);
  }, []);

  return (
    <>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={styles.modal_container}>
        <div className={styles.modal}>
          <div className={styles.modal__head}>
            <h1>{title}</h1>
          </div>
          <div className={styles.modal__body}>
            <p>{body}</p>
          </div>
          <div className={styles.modal__button}>
            <button onClick={closeModal}>{buttonText}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
