import styles from "./Input.module.css";
const Input = ({ id,labelText, type, value, onChange }) => {
const setValue = (event) =>{
    onChange(event.target.value);
}
  return (
    <div className={styles['input-container']}>
      <label htmlFor={id} className={styles['input-label']}>{labelText}</label>
      <input id={id} type={type} value={value} className={styles['input']} onChange={setValue}/>
    </div>
  );
};
export default Input;
