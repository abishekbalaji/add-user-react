import React from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button/Button";
import styles from "./Modal.module.css";

const Backdrop = ({ visibility, onModalClose }) => {
  return (
    <div
      className={`${styles.overlay} ${!visibility && styles.hidden}`}
      onClick={onModalClose}
    ></div>
  );
};

const ModalOverlay = ({ children, visibility, onModalClose }) => {
  return (
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
  );
};

const Modal = function ({ children, visibility, onModalClose }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop visibility={visibility} onModalClose={onModalClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          children={children}
          visibility={visibility}
          onModalClose={onModalClose}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
