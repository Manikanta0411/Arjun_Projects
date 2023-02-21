import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 495.87,
    date: new Date(2021, 8, 14),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 595.87,
    date: new Date(2022, 6, 24),
  },
  {
    id: "e3",
    title: "Room Rent",
    amount: 695.87,
    date: new Date(2019, 2, 18),
  },
  {
    id: "e4",
    title: "Groceries",
    amount: 295.87,
    date: new Date(2021, 10, 21),
  },
];
//const App=()=>{     Both are same
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  //React code
  // return React.createElement(
  //   "div",uy
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  //Jsx code
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>;
    </div>
  );
}

export default App;
