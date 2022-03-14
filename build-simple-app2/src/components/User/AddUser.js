import { useState, useRef } from "react";
import style from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

  const nameInputRef = useRef(); // useRef() is a hook that returns a mutable ref object
  const ageInputRef = useRef(); // useRef() is a hook that returns a mutable ref object
  const [error, setError] = useState(null); // error = null

  const addUser = (event) => {
    event.preventDefault(); // prevent automatic page refresh on submit
    const enteredName = nameInputRef.current.value; // get the value of the input name
    const enteredAge = ageInputRef.current.value; // get the value of the input age

    // check if the input is empty and invalid age
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid username and age!",
      });
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid age!",
      });
    }

    props.onAddUser(enteredName, +enteredAge); // call the onAddUser function from App.js
    nameInputRef.current.value = ""; // reset input name
    ageInputRef.current.value = ""; // reset input age
  };

  const errorHandler = () => {
    setError(null); // reset error
  };

  return (
    <div>
      {/* if input is not null, show the error modal */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      {/* add user form */}
      <Card className={style.input}>
        <form onSubmit={addUser}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button> Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
