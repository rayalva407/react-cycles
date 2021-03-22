import React from 'react'

function Form({ setInputDate }) {


const inputDateHandler = (e) => {
  setInputDate(e.target.value)
}

  return (
    <div>
      <h1>Select a date</h1>
      <input onChange={inputDateHandler} type="date"/>
      <button>Submit</button>
    </div>
  )
}

export default Form
