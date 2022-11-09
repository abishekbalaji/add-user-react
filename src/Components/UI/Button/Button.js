import styles from "./Button.module.css";

const Button = function ({ className, children, onClickHandler }) {
  const classes = `${styles.btn} ${styles[className]}`;
  return (
    <button onClick={onClickHandler} className={classes}>
      {children}
    </button>
  );
};

export default Button;
