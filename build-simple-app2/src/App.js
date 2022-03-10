import { useState } from "react";
import "./css/index.css";
import UserList from "./components/User/UserList";
import AddUser from "./components/User/AddUser";



function App() {
  const [userList, setUserList] = useState([]);

  const addUser = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
