import React from "react";
import ExpenseItem from "./Expenses/ExpenseItem";

const ExpensesList = (props) => {
  if(props.items.length === 0){
    return <h2 className="text-center text-2xl text-white ">Found no expenses.</h2>
  }

  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
