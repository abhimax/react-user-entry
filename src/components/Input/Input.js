
import styles from "./Input.module.css";
const Input = ({ id,labelText, type, value, inputRef }) => {
  return (
    <div className={styles['input-container']}>
      <label htmlFor={id} className={styles['input-label']}>{labelText}</label>
      <input id={id} type={type} value={value} className={styles['input']} ref={inputRef}/>
    </div>
  );
};
export default Input;
