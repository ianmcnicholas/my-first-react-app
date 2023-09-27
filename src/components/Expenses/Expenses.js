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
        {props.expensesArray.map((element) => (
          <ExpenseItem
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
