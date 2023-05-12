import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  }
  props.onAddExpense(expenseData)
  console.log('-------',expenseData)
} 

  return (
    <div className='flex justify-center items-center'>
       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense