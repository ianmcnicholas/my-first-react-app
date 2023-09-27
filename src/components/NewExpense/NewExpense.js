import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isAddingItem, setIsAddingItem] = useState(false);

  // the below function will take the data from the child ExpenseForm
  // extract it and add on an id field
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsAddingItem(false);
  };

  const stopAddingItem = () => {
    setIsAddingItem(false);
  };

  const startAddingItem = () => {
    setIsAddingItem(true);
  };

  return (
    <div className="new-expense">
      {!isAddingItem && (
        <button onClick={startAddingItem}>Add New Expense</button>
      )}
      {isAddingItem && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddingItem}
        />
      )}
    </div>
  );
};

export default NewExpense;
