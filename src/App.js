import React, { useState } from 'react';
import './App.css';
import { Courseform } from './components/Courseform.js';

export function Header() {
  return(
    <header>
      <h1>CSW GPA Calculator</h1>
    </header>
  )
}


function AddCourseForm({forms, setForms}) {

  const handleAddition = () => {
    // Add a new form to the list of forms
    setForms([...forms, <Courseform key={forms.length} />]);
  };
  return(
    <div>
      <button type="submit" onClick={handleAddition}>
        Add Course
      </button>
    </div>
  )
}


function CourseList({forms}){
  return (
    <div className='course-list'>
      {forms.map((form, index) => (
        <div key={index}>{form}</div>
      ))}
    </div>
  )
}

function App() {
  const [forms, setForms] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Courseform />
        <CourseList forms={forms} />
        <AddCourseForm forms={forms} setForms={setForms} />
      </header>
    </div>
  );
}

export default App;
