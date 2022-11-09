import { useState } from "react";
import Modal from "../../Modal/Modal";
import Button from "../../UI/Button/Button";
import styles from "./NewUserForm.module.css";

const NewUserForm = function ({ onCollectUser }) {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalData, setModalData] = useState("");

  const nameChangeHandler = (e) => {
    setNameInput(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAgeInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name: nameInput,
      age: ageInput,
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
    setNameInput("");
    setAgeInput("");
  };

  const modalCloseHandler = () => {
    setModalVisibility(false);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={styles["new-user__controls"]}>
          <div className={styles["new-user__control"]}>
            <label>Username</label>
            <input value={nameInput} onChange={nameChangeHandler} type="text" />
          </div>
          <div className={styles["new-user__control"]}>
            <label>Age (Years)</label>
            <input value={ageInput} onChange={ageChangeHandler} type="number" />
          </div>
        </div>
        <div>
          <Button>Add User</Button>
        </div>
      </form>
      <Modal visibility={modalVisibility} onModalClose={modalCloseHandler}>
        {modalData}
      </Modal>
    </div>
  );
};

export default NewUserForm;
