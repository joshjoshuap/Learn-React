import ExpenseForm from "./ExpenseForm";
import "../../css/index.css";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const saveExpenseData = (inputtedExpenseData) => {
    const expenseData = {
      ...inputtedExpenseData, // get all objects using spread operator
      id: Math.random().toString(), // generate random id
    };
    props.addingExpense(expenseData); // pass new generated expenseData to App - addingExpense attribute
  };

  return (
    <Card>
      {/* Get the value of SavingExpenseData from submitForm in Expense Form*/}
      <ExpenseForm SavingExpenseData={saveExpenseData} />
      {/* Pass the value of SavingExpenseData to function saveExpenseData*/}
    </Card>
  );
};

export default NewExpense;
