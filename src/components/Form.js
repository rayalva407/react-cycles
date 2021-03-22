import React from 'react'

function Form({ inputDate, setInputDate, cycles, setCycles }) {


const inputDateHandler = (e) => {
  setInputDate(e.target.value)
}

const submitCycleHandler = (e) => {
  e.preventDefault();
  setCycles([
    ...cycles,
    { id: Math.floor(Math.random() * 1000),
      date: inputDate
    }
  ])
  setInputDate('')

}

  return (
    <div>
      <h1>Select a date</h1>
      <input onChange={inputDateHandler} type="date"/>
      <button onClick={submitCycleHandler}>Submit</button>
    </div>
  )
}

export default Form
