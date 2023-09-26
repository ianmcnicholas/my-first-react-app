import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expensesList = [
    {
      id: "e1",
      title: "Phone Bill",
      amount: 10.49,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e2",
      title: "Climbing Membership",
      amount: 71.99,
      date: new Date(2022, 3, 27),
    },
    {
      id: "e3",
      title: "Date Night",
      amount: 24.12,
      date: new Date(2020, 4, 26),
    },
    {
      id: "e4",
      title: "Flights to Barcelona",
      amount: 299.99,
      date: new Date(2019, 5, 25),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expensesArray={expensesList} />
    </div>
  );
}

export default App;
