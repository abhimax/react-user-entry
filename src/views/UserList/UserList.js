import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import User from "../User/User";
import styles from "./UserList.module.css";

const UserList = ({users}) => {
  console.log('From UserList >>',users);
  return (
    <Card className={styles['user-view']}>
      {
        users && users.map( (item,key) => { return <User name={item.name} age={item.age} key={key}/> })
      }
    </Card>
  );
};
export default UserList;
