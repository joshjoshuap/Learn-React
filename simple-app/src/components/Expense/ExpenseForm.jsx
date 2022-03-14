import { useState } from "react";
import "../../css/index.css";

// Getting props from NewExpense
const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const changeTitle = (event) => {
    setInputTitle(event.target.value); // set the value of inputTitle according to input event value
  };

  const changeAmount = (event) => {
    setInputAmount(event.target.value);
  };

  const changeDate = (event) => {
    setInputDate(event.target.value);
  };

  // execute after form button clicked
  const submitForm = (event) => {
    event.preventDefault(); // prevent to load whole page

    // Getting value from input text and set to new variable
    const expenseData = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };

    props.SavingExpenseData(expenseData); // pass expenseData object to NewExpense.jsx - SavingExpense attribute

    // Reset the input to empty - blank
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form className="expense-form" onSubmit={submitForm}>
      <div className="form-control">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          value={inputTitle} // get the value of changed inputTitle
          onChange={changeTitle} // change the value of inputTitle
        />
      </div>
      <div className="form-control">
        <label for="amount">Amount</label>
        <input
          type="text"
          name="amount"
          value={inputAmount}
          onChange={changeAmount}
        />
      </div>
      <div className="form-control">
        <label for="date">Date</label>
        <input
          type="date"
          name="date"
          value={inputDate}
          onChange={changeDate}
        />
      </div>
      <button className="form-btn">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
