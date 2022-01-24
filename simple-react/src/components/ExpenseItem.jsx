import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="container">
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item_description">
          <div>{props.title}</div>
          <div className="expense-item_amount">{props.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
