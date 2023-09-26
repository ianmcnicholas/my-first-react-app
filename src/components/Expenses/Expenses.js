import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const yearFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilter={yearFilterHandler} />
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
      </Card>
    </div>
  );
}

export default Expenses;
