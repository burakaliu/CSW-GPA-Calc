import React, { useState } from 'react';
import './App.css';
import { CourseList } from './components/CourseList.js';
import { GPACalculator } from './components/GPACalculator.js';

export function Header() {
  return(
    <header>
      <h1>CSW GPA Calculator</h1>
    </header>
  )
}

function App() {
  const [forms, setForms] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <CourseList forms={forms} />
        <GPACalculator forms={forms} setForms={setForms} />
      </header>
    </div>
  );
}

export default App;
