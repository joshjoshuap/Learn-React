import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value); // change enteredName value to the value of the input
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault(); // prevent the web page from refreshing
    console.log(enteredName);

    setEnteredName(''); // reset enteredName value to an empty string
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
