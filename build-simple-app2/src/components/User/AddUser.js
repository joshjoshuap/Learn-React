import { useState, useRef } from "react";
import style from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState(null);

  const addUser = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value; // get the value of the input name
    const enteredAge = ageInputRef.current.value; // get the value of the input age
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

    props.onAddUser(enteredName, +enteredAge);
    nameInputRef.current.value = ""; // reset input name
    ageInputRef.current.value = ""; // reset input age
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
