import { useState } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import ErrorModal from "../../components/ErrorModal/ErrorModal";

import Input from "../../components/Input/Input";
import styles from "./UserEntry.module.css";

const UserEntry = ({ onAddUser }) => {
  const nameChangeHandler = (value) => {
    setUser((prevState) => {
      return { ...prevState, name: value };
    });
  };

  const ageChangeHandler = (value) => {
    setUser((prevState) => {
      return { ...prevState, age: value };
    });
  };

  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const [error, setError] = useState(null);

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (user.name.trim().length === 0 || user.age.trim().length === 0) {
      setError((prevState) => {
        return {
          ...prevState,
          title: "Invalid Input Values!",
          message: "Please enter valid name and age (Non empty values).",
        };
      });
    } else if (user.age < 0) {
      setError((prevState) => {
        return {
          ...prevState,
          title: "Invalid Age!",
          message: "Please enter a valid age (>0).",
        };
      });
    } else {
      onAddUser(user);
      setUser((prevState) => {
        return { ...prevState, name: "", age: "" };
      });
    }
  };

  const onConfirmHandler = () => {
    setError(null);
  };

  return (
    <Card className={styles["user-entry"]}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onConfirmHandler}
        />
      )}
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
