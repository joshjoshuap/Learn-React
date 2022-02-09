import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function changeContact(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setContact((previousValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: previousValue.lName,
          email: previousValue.email,
        };
      } else if (inputName === "lName") {
        return {
          fName: previousValue.fName,
          lName: newValue,
          email: previousValue.email,
        };
      } else if (inputName === "email") {
        return {
          fName: previousValue.fName,
          lName: previousValue.lName,
          email: newValue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={changeContact} name="fName" placeholder="First Name" />
        <input onChange={changeContact} name="lName" placeholder="Last Name" />
        <input onChange={changeContact} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
