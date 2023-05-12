import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler= (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <div className='m-10 bg-neutral-800 py-5 rounded-3xl'>
        <Card>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map(expense => 
        <ExpenseItem title={expense.title}
        amount={expense.amount}
        date={expense.date}/>
        )}
        </Card>
    </div>
  )
}

export default Expenses