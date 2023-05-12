import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "pens",
      amount: 294.67,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e3",
      title: "pencils",
      amount: 294.67,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e4",
      title: "books",
      amount: 294.67,
      date: new Date(2020, 7, 14),
    },
  ];

  return (
    <div className=" bg-gray-400 p-10">
      <NewExpense/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
