import { useState } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import styles from "./UserEntry.module.css";

const UserEntry = ({ onAddUser }) => {
  const nameChangeHandler = (value) => {
    console.log("uname -from userEntry ", value);

    setUser((prevState) => {
      return { ...prevState, name: value };
    });
  };

  const ageChangeHandler = (value) => {
    console.log("age -from userEntry ", value);
    setUser((prevState) => {
      return { ...prevState, age: value };
    });
  };

  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (user.name.length == 0 || user.age.length == 0) {
      alert("Please enter valid name and age (Non empty values).");
    } else if (user.age < 0) {
      alert("Please enter a valid age (>0).");
    } else {
      onAddUser(user);
      setUser((prevState) => {
        return { ...prevState, name: "", age: "" };
      });
    }
  };

  return (
    <Card className={styles["user-entry"]}>
      <span>{JSON.stringify(user)}</span>
      <form onSubmit={SubmitHandler}>
        <Input
          id="uName"
          labelText="User Name"
          type="text"
          onChange={nameChangeHandler}
          value={user.name}
        />
        <Input
          id="uAge"
          labelText="Age (Years)"
          type="number"
          onChange={ageChangeHandler}
          value={user.age}
        />
        <div className={styles["action-btn-container"]}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};
export default UserEntry;
