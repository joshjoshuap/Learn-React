import ExpenseForm from "./ExpenseForm";
import "../../css/index.css";
import Card from "../UI/Card";

const NewExpense = (props) => {
  const saveExpenseData = (inputtedExpenseData) => {
    const expenseData = {
      ...inputtedExpenseData, // get all objects using spread operator
      id: Math.random().toString(), // generate random id
    };
    props.addingExpense(expenseData); // pass new generated expenseData object to Expense.jsx - addingExpense attribute
  };

  return (
    <Card>
      {/* Get the value of SavingExpenseData from submitForm() in Expense Form.jsx*/}
      <ExpenseForm SavingExpenseData={saveExpenseData} />
      {/* Pass the value of SavingExpenseData to saveExpenseData()*/}
    </Card>
  );
};

export default NewExpense;
