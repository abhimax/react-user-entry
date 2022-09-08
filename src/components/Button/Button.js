import styles from "./Button.module.css"
const Button = ({children, type}) => {
    return<button className={styles.btn} type={type}>{children}</button>;
}
export default Button;