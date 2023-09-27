import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((element) => (
        <ExpenseItem
          key={element.id} // must add this key even if not getting displayed
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
