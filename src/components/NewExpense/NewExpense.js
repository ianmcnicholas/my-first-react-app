import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // the below function will take the data from the child ExpenseForm
  // extract it and add on an id field
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {/* this function we give ExpenseForm above will grab data from the child (ExpenseForm)
      this function becomes a "prop" available lower down */}
    </div>
  );
};

export default NewExpense;
