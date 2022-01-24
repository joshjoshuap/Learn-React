import React from "react";
import Heading from "./components/Heading";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  let expenses = [
    {
      id: 1,
      title: "Housing Loan",
      amount: 200,
      date: "January 1, 2022",
    },
    {
      id: 2,
      title: "Car Loan",
      amount: 10,
      date: "January 1, 2022",
    },
    {
      id: 3,
      title: "Tution",
      amount: 1000,
      date: "January 1, 2022",
    },
  ];

  return (
    <div>
      <Heading />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
    </div>
  );
}

export default App;
