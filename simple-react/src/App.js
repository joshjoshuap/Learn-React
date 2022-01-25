import React from "react";
import Expenses from "./js/Expenses"; // importing data
import ExpenseItem from "./components/Expense/ExpenseItem";
import NewExpense from "./components/Expense/NewExpense";
import Heading from "./components/UI/Heading";
import Card from "./components/UI/Card";

const App = () => {
  const addExpense = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <Heading />
      {/* Get the value of addingExpense from saveExpenseData in NewExpense*/}
      <NewExpense addingExpense={addExpense} />
      {/* Pass the value of addingExpense to addExpense function*/}
      <Card>
        {/* Loop Expenses and pass value to ExpensesItem*/}
        {Expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default App;
