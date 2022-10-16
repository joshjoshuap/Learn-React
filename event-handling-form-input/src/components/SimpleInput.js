import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');;
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim().length !== 0; // check if user entered name is valid
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; // if user not entered a name and touched the input, then the input is invalid

  // if user entered a name set form to valid
  let formIsValid = false; // set form to invalid by default
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  // if user type in the input field error message will be hidden
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value); // change enteredName value to the value of the 

  };

  // display error if user click input field and click away from input field
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // prevent the web page from refreshing

    setEnteredNameTouched(true); // set enteredNameTouched to true so that the validation message will appear

    // stop if user didn't enter a name
    if (!enteredNameIsValid) {
      return;
    }

    // console.log(enteredName);

    setEnteredName(''); // reset enteredName value to an empty string
    setEnteredNameTouched(false); // reset enteredNameTouched to false
  };

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'; // if enteredNameIsValid is true, return 'form-control' else return 'form-control invalid' css style

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName} />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
