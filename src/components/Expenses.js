import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expensesArray[0].title}
        amount={props.expensesArray[0].amount}
        date={props.expensesArray[0].date}
      />
      <ExpenseItem
        title={props.expensesArray[1].title}
        amount={props.expensesArray[1].amount}
        date={props.expensesArray[1].date}
      />
      <ExpenseItem
        title={props.expensesArray[2].title}
        amount={props.expensesArray[2].amount}
        date={props.expensesArray[2].date}
      />
      <ExpenseItem
        title={props.expensesArray[3].title}
        amount={props.expensesArray[3].amount}
        date={props.expensesArray[3].date}
      />
    </div>
  );
}

export default Expenses;
