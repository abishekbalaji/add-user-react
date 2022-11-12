import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Modal.module.css";

const Modal = function ({ children, visibility, onModalClose }) {
  return (
    <React.Fragment>
      <div className={`${styles.modal} ${!visibility && styles.hidden}`}>
        <button onClick={onModalClose} className={styles["close-modal"]}>
          &times;
        </button>
        <div className={styles["modal-title"]}>
          <h2>Invalid Input ⛔</h2>
        </div>
        <p>{children}</p>
        <Button onClickHandler={onModalClose} className="alternative">
          Close
        </Button>
      </div>
      <div
        className={`${styles.overlay} ${!visibility && styles.hidden}`}
      ></div>
    </React.Fragment>
  );
};

export default Modal;
