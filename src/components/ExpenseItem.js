import React from 'react'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

const ExpenseItem = (props) => {



  return (
    <div>
        <Card>
        <ExpenseDate date={props.title.date}/>
        <h2>{props.title.title}</h2>
        <p>{props.title.amount}</p>
        </Card>
    </div>
  )
}

export default ExpenseItem