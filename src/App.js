import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
