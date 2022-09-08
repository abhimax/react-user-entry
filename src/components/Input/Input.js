import styles from "./Input.module.css";
const Input = ({ labelText, type, value }) => {
  return (
    <div className={styles['input-container']}>
      <label className={styles['input-label']}>{labelText}</label>
      <input type={type} value={value} className={styles['input']}/>
    </div>
  );
};
export default Input;
