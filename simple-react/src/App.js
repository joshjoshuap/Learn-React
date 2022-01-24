import React from "react";
import Heading from "./components/Heading";
import Expenses from "./components/Expenses";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <Heading />
      {Expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
