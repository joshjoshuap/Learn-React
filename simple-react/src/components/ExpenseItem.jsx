import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./index.css";

function ExpenseItem(props) {
  return (
    <div className="container">
      <Card className="expense-item">
        <ExpenseDate date={props.date} /> {/* Call ExpensDate*/}
        <div className="expense-item_description">
          <div>{props.title}</div>
          <div className="expense-item_amount">{props.amount}</div>
        </div>
      </Card>
    </div>
  );
}

export default ExpenseItem;
