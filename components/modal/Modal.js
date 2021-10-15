import React, { useState } from "react";
import styles from "./modal.module.css";
import Button from "../assets/button/Button";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../Store/modal";

const Modal = ({ title, body, buttonText }) => {
  const dispatch = useDispatch(modalActions);
  const { isOn } = useSelector((state) => state?.modal);
  const [modalState, setModalState] = useState(isOn);

  const closeModal = () => {
    dispatch(modalActions.toggleModal());
    setModalState(false);
  };

  return (
    <>
      {modalState && (
        <div className={styles.overlay} onClick={closeModal}></div>
      )}
      {modalState && (
        <div className={styles.modal_container}>
          <div className={styles.modal}>
            <div className={styles.modal__head}>
              <h1>{title}</h1>
            </div>
            <div className={styles.modal__body}>
              <p>{body}</p>
            </div>
            <div className={styles.modal__button}>
              <Button type="button" onClick={closeModal}>
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
