import React, { useState } from "react";
import "./css/index.css";
import UserList from "./components/User/UserList";
import AddUser from "./components/User/AddUser";

function App() {
  const [userList, setUserList] = useState([]);

  // add user to the user list array and set the new user list array
  const addUser = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }]; 
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={addUser} />
      <UserList users={userList} />
    </React.Fragment>
  );
}

export default App;
