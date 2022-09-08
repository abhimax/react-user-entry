import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import styles from "./UserEntry.module.css";

const UserEntry = () => {
  return (
    <Card className={styles['user-entry']}>
      <form>
        <Input labelText="User Name" type="text" />
        <Input labelText="Age" type="number" />
        <div className={styles['action-btn-container']}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};
export default UserEntry;
