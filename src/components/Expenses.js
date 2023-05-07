import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from './Card'

const Expenses = (props) => {



  return (
    <div>
        <Card>
        <ExpenseItem title={props.items[0]}/>
        <ExpenseItem title={props.items[1]}/>
        <ExpenseItem title={props.items[2]}/>
        <ExpenseItem title={props.items[3]}/>
        </Card>
    </div>
  )
}

export default Expenses