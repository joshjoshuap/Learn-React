import React from "react";
import Login from "./login";

var isLoggedIn = false;
const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn === true ? <h1>Hello</h1> : <Login />} */}

      {/*       
      {currentTime > 12 ? <h1> Good Afternoon </h1> : <h1>GoodEvening </h1>} */}
    </div>
  );
}

export default App;
