import Card from "../../components/Card/Card";
import User from "../User/User";
import styles from "./UserList.module.css";

const UserList = ({ users }) => {
  console.log(users.length);
  return (
    <>
      {users.length === 0 ? null : (
        <Card className={styles["user-view"]}>
          <ul className={styles["user-list"]}>
            {users &&
              users.map((item, key) => {
                return (
                  <li key={key}>
                    <User name={item.name} age={item.age} />
                  </li>
                );
              })}
          </ul>
        </Card>
      )}
    </>
  );
};
export default UserList;
