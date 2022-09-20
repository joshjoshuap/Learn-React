// Getting props from ExpensItem.jsx
const ExpenseDate = (props) => {
  // Getting user Date
  const month = props.date.toLocaleString("en-US", { month: "long" }); // get string month
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); // get days
  const year = props.date.getFullYear();

  // return equivalent date value
  return (
    <div className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_year">{year}</div>
      <div className="expense-date_day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
