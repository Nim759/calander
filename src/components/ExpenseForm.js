import React from "react";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  console.log('******')
  

  // const [userInput,setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enterDate:''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value );
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler} className="bg-blue-500 text-2xl">
      <div className="">
        <div className="flex my-10">
          <div className="flex-col flex mx-10 gap-4">
            <label className="text-center">title</label>
            <input
              type="text"
              className="rounded-lg"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
            <label className="text-center" >
              Date
            </label>
            <input
              type="date"
              min="2023.01.01"
              max="2024.01.01"
              className="p-1 rounded-lg"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="flex flex-col mx-10 gap-4">
            <label className="text-center">Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              className="rounded-lg"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="m-10 border p-3 bg-orange-300 rounded-lg text-white border-white"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
