import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'

function App() {

  const [inputDate, setInputDate] = useState('');
  const [cycles, setCycles] = useState([]);

  return (
    <div className="App">
      <Form setInputDate={setInputDate} inputDate={inputDate} cycles={cycles} setCycles={setCycles} />
    </div>
  );
}

export default App;
