import React, { useState } from 'react';
import './App.css';
import { CourseList, AddCourseForm } from './components/CourseList.js';

export function Header() {
  return(
    <header>
      <h1>CSW GPA Calculator</h1>
    </header>
  )
}

function GPACalculator() {
  const [gpa, setGPA] = useState(Math.round((Math.random() * 4 + 1) * 10) / 10);

  const calculateGPA = () => {
    let total = 0;
    let count = 0;
    let gpa = 0;
    for (let i = 0; i < document.getElementsByClassName("course-form").length; i++) {
      let grade = document.getElementsByClassName("course-form")[i].getElementsByClassName("grade")[0].innerText;
      console.log(grade);
      let phase = document.getElementsByClassName("course-form")[i].getElementsByClassName("selected")[0].innerText;

      let phaseBoost = 0;
      if (!isNaN(phaseBoost)) {
        if (phase === "4"){
          phaseBoost = 0.25;
        } else if (phase === "5"){
          phaseBoost = 0.5;
        }else if (phase === "AP"){
          phaseBoost = 1;
        }
      }

      console.log(phase);

      if (grade === "A") {
        total += (4.0 + phaseBoost);
      } else if (grade === "A-") {
        total += (3.7 + phaseBoost);
      } else if (grade === "B+") {
        total += (3.3 + phaseBoost);
      } else if (grade === "B") {
        total += (3.0 + phaseBoost);
      } else if (grade === "B-") {
        total += (2.7 + phaseBoost);
      } else if (grade === "C+") {
        total += (2.3 + phaseBoost);
      } else if (grade === "C") {
        total += (2.0 + phaseBoost);
      } else if (grade === "C-") {
        total += (1.7 + phaseBoost);
      } else if (grade === "D") {
        total += (1.0 + phaseBoost);
      } else {
        total += (0.0 + phaseBoost);
      }
      count++;
    }
    gpa = total / count;
    setGPA((Math.round(gpa * 10) / 10).toFixed(1));
  };
  return (
    <div>
      <button onClick={calculateGPA}>Calculate GPA</button>
      <h2>{gpa}</h2>
    </div>
  );
};

function App() {
  const [forms, setForms] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <CourseList forms={forms} />
        <AddCourseForm forms={forms} setForms={setForms} />
        <GPACalculator />
      </header>
    </div>
  );
}

export default App;
