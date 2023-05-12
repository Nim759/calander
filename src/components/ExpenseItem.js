import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log("clicked");
  };

  return (
    <Card>
      <div className="m-10 bg-gray-600 text-white flex justify-between items-center rounded-3xl">
        <ExpenseDate date={props.title.date} />
        <h2 className="text-5xl">{title}</h2>
        <p className="bg-indigo-800 border-white border-2 m-5 px-5 py-2 text-4xl rounded-xl">
          ${props.title.amount}
        </p>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
