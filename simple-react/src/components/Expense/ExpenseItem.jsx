import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../../css/index.css";

const ExpenseItem = (props) => {
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
};

export default ExpenseItem;
