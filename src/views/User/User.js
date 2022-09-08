import styles from "./User.module.css"
const User = ({name, age}) => {
    return <div className={styles.user}>{`${name} (${age} years old)`}</div>;
}
export default User;