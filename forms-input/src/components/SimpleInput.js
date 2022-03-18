import { useState, useEffect } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // This is a custom hook that is used to validate the entered name.
  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name Input is Valid');
    }
  }, [enteredNameIsValid]);

  // if user type in the input field error message will be hidden
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value); // change enteredName value to the value of the 
    
    // if user entered a name, error message will be visible
    if (event.target.value.trim().length !== 0) {
      setEnteredNameIsValid(true); 
      return;
    }
  };

  // display error if user click input field and click away from input field
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    // if user entered a name, error message will be hidden
    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false); 
      return;
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // prevent the web page from refreshing

    setEnteredNameTouched(true); // set enteredNameTouched to true so that the validation message will appear

    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false); 
      return;
    }

    setEnteredNameIsValid(true); // if user entered a name, set enteredNameIsValid to true

    console.log(enteredName);

    setEnteredName(''); // reset enteredName value to an empty string
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched; // if user not entered a name and touched the input, then the input is invalid

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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
