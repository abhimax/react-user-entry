import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import User from "../User/User";
import styles from "./UserList.module.css";

const UserList = () => {
  return (
    <Card className={styles['user-view']}>
      <User name="Tim" age="34"/>
      <User name="Max" age="29"/>
    </Card>
  );
};
export default UserList;
