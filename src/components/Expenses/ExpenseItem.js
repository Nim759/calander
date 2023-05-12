import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card";

const ExpenseItem = (props) => {

  return (
    <li>
    <Card>
      <div className="m-10 bg-gray-600 text-white flex justify-between items-center rounded-3xl">
        <ExpenseDate date={props.date} />
        <h2 className="text-5xl">{props.title}</h2>
        <p className="bg-indigo-800 border-white border-2 m-5 px-5 py-2 text-4xl rounded-xl">
          ${props.amount}
        </p>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </Card>
    </li>
  );
};

export default ExpenseItem;
