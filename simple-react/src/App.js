import React from "react";
import Expenses from "./js/Expenses"; // importing data
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/Expense/NewExpense";
import Heading from "./components/UI/Heading";

const App = () => {
  const addExpense = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <Heading />
      {/* Get the value of addingExpense from saveExpenseData() in NewExpense.jsx*/}
      <NewExpense addingExpense={addExpense} />
      {/* Pass the value of addingExpense to addExpense()*/}
      <Expense item={Expenses} />
    </div>
  );
};

export default App;
