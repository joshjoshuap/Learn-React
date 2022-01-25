import React from "react";
import Heading from "./components/Heading";
import Expenses from "./components/Expenses";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";

function App() {
  return (
    <Card>
      <Heading />
      {Expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default App;
