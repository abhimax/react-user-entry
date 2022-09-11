import "./App.css";
import UserEntry from "./views/UserEntry/UserEntry";
import UserList from "./views/UserList/UserList";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);
  const onAddUserHandler = (user) => {
    setUserList((prevState) => {
      return [...prevState, ...[user]];
    });
  };

  return (
    <div className="App">
      <UserEntry onAddUser={onAddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
