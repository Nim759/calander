import React from 'react'

const ExpenseDate = (props) => {

    const month =props.date.toLocaleString('en-US' ,{month : 'long'});
    const day =props.date.toLocaleString('en-US' ,{day : '2-digit'});
    const year =props.date.getFullYear()

  return (
    <div className='text-center border-white border-2 p-5 m-5 bg-stone-700 rounded-xl'>
        <p>{month}</p>
        <p>{day}</p>
        <p>{year}</p>
    </div>
  )
}

export default ExpenseDate