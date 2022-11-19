import React, { useRef, useState } from "react";
import Modal from "../../Modal/Modal";
import Button from "../../UI/Button/Button";
import styles from "./NewUserForm.module.css";

const NewUserForm = function ({ onCollectUser }) {
  // const [nameInput, setNameInput] = useState("");
  // const [ageInput, setAgeInput] = useState("");
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalData, setModalData] = useState("");

  // const nameChangeHandler = (e) => {
  //   setNameInput(e.target.value);
  // };

  // const ageChangeHandler = (e) => {
  //   setAgeInput(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name: nameInputRef.current.value,
      age: ageInputRef.current.value,
    };
    if (userData.name.trim() === "" || userData.age.trim() === "") {
      setModalVisibility(true);
      setModalData("Enter valid data for name and age.");
      return;
    }
    if (+userData.age.trim() <= 0) {
      setModalVisibility(true);
      setModalData("Age should be a positive number.");
      return;
    }
    onCollectUser(userData);
    // Below way of manipulating DOM directly is not advised.
    // refs have direct access to their DOM elements.
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const modalCloseHandler = () => {
    setModalVisibility(false);
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <div className={styles["new-user__controls"]}>
          <div className={styles["new-user__control"]}>
            <label>Username</label>
            <input ref={nameInputRef} type="text" />
          </div>
          <div className={styles["new-user__control"]}>
            <label>Age (Years)</label>
            <input ref={ageInputRef} type="number" />
          </div>
        </div>
        <div>
          <Button>Add User</Button>
        </div>
      </form>
      <Modal visibility={modalVisibility} onModalClose={modalCloseHandler}>
        {modalData}
      </Modal>
    </React.Fragment>
  );
};

export default NewUserForm;
