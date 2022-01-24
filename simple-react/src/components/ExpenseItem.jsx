const ExpenseItem = () => {
  const Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  /* Getting User Date */
  const d = new Date();
  const ExpenseDate = `${
    Month[d.getMonth()]
  } ${d.getDate()}, ${d.getFullYear()}`;

  return (
    <div className="container">
      <div className="expense-item">
        <div className="expense-item_date">{ExpenseDate}</div>
        <div className="expense-item_description">
          <div>House Loan</div>
          <div className="expense-item_amount">100,000</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
