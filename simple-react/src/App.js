import React from "react";
import Expenses from "./js/Expenses";
import ExpenseItem from "./components/Expense/ExpenseItem";
import Heading from "./components/UI/Heading";
import Card from "./components/UI/Card";

const App = () => {
  return (
    <div>
      <Heading />
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
