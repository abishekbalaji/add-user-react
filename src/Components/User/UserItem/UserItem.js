import styles from "./UserItem.module.css";

const UserItem = function ({ name, age }) {
  const output = `${name} (${age} years old)`;
  return (
    <div className={styles["user-item"]}>
      <p>{output}</p>
    </div>
  );
};

export default UserItem;
