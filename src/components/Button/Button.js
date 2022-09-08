import styles from "./Button.module.css";
const Button = ({ children, type, ...props }) => {
  return (
    <button className={styles.btn} type={type} {...props}>
      {children}
    </button>
  );
};
export default Button;
