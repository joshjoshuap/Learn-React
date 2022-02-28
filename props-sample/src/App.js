import './App.css';
import userInfo from "./userInfo"
import UserCard from "./UserCard"

function App() {
  return (
    <div class="container">
     <div class="grid">
      <UserCard info={userInfo[0]}/>
      <UserCard info={userInfo[1]}/>
      <UserCard info={userInfo[2]}/>
      <UserCard info={userInfo[3]}/>
      <UserCard info={userInfo[4]}/>
      <UserCard info={userInfo[5]}/>
     </div>
    </div>
  );
}

export default App;
