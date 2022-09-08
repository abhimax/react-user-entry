import logo from "./logo.svg";
import "./App.css";
import UserEntry from "./views/UserEntry/UserEntry";
import UserList from "./views/UserList/UserList";
import { useState } from "react";

//let userList = "";
function App() {
  const [userList, setUserList] = useState([]);
  const onAddUserHandler = (user) => {
    console.log("User from App JS", user);
    setUserList((prevState) => {
      return [...prevState, ...[user]];
    });
    console.log("onAddUserHandler", userList);
  };

  return (
    <div className="App">
      <UserEntry onAddUser={onAddUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
