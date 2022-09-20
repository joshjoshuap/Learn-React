import React, { useState } from "react";
import Expenses from "./js/Expenses"; // importing data
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/Expense/NewExpense";
import Heading from "./components/UI/Heading";

const App = () => {
  const [expenses, setExpenses] = useState(Expenses);
  const addExpense = (expense) => {
    // prevExpense = Expenses or expenses
    setExpenses((prevExpense) => {
      console.log([expense, ...prevExpense]);
      return [expense, ...prevExpense];
    }); // add new created expense with existed expenses to new array set to expenses
  };

  return (
    <div>
      <Heading />
      {/* Get the value of addingExpense from saveExpenseData() in NewExpense.jsx*/}
      <NewExpense addingExpense={addExpense} />
      {/* Pass the value of addingExpense to addExpense()*/}
      <Expense item={expenses} />
    </div>
  );
};

export default App;
