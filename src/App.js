import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'

function App() {

  const [inputDate, setInputDate] = useState('');

  return (
    <div className="App">
      <Form setInputDate={setInputDate} />
    </div>
  );
}

export default App;
