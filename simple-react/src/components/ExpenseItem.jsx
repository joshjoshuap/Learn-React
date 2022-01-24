function ExpenseItem(props) {
  // const month = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  /* Getting User Date */
  // const expenseDate = `
  // ${month[props.date.getMonth()]}
  // ${props.date.getDate()},
  // ${props.date.getFullYear()}`;

  return (
    <div className="container">
      <div className="expense-item">
        <div className="expense-item_date">{props.date}</div>
        <div className="expense-item_description">
          <div>{props.title}</div>
          <div className="expense-item_amount">{props.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
