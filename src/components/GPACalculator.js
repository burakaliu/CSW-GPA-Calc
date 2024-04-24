import React, { useState } from "react";
import { AddCourseForm } from "./CourseList";
import "./GPACalculator.css";

export function GPACalculator({ forms, setForms }) {
  const [gpa, setGPA] = useState(Math.round((Math.random() * 4 + 1) * 10) / 10);

  const calculateGPA = () => {
    let total = 0;
    let count = 0;
    let gpa = 0;
    for (
      let i = 0;
      i < document.getElementsByClassName("course-form").length;
      i++
    ) {
      let grade = document
        .getElementsByClassName("course-form")
        [i].getElementsByClassName("grade")[0].innerText
        ? document
            .getElementsByClassName("course-form")
            [i].getElementsByClassName("grade")[0].innerText
        : "A";
      console.log(grade);
      let phase = document
        .getElementsByClassName("course-form")
        [i].getElementsByClassName("selected")[0]
        ? document
            .getElementsByClassName("course-form")
            [i].getElementsByClassName("selected")[0].innerText
        : 4;

      let phaseBoost = 0;
      if (!isNaN(phaseBoost)) {
        if (phase === "4") {
          phaseBoost = 0.25;
        } else if (phase === "5") {
          phaseBoost = 0.5;
        } else if (phase === "AP") {
          phaseBoost = 1;
        }
      }

      console.log(phase);

      if (grade === "A") {
        total += 4.0 + phaseBoost;
      } else if (grade === "A-") {
        total += 3.7 + phaseBoost;
      } else if (grade === "B+") {
        total += 3.3 + phaseBoost;
      } else if (grade === "B") {
        total += 3.0 + phaseBoost;
      } else if (grade === "B-") {
        total += 2.7 + phaseBoost;
      } else if (grade === "C+") {
        total += 2.3 + phaseBoost;
      } else if (grade === "C") {
        total += 2.0 + phaseBoost;
      } else if (grade === "C-") {
        total += 1.7 + phaseBoost;
      } else if (grade === "D") {
        total += 1.0 + phaseBoost;
      } else {
        total += 0.0 + phaseBoost;
      }
      count++;
    }
    gpa = total / count;
    setGPA((Math.round(gpa * 10) / 10).toFixed(1));
  };
  return (
    <div className="gpa-container">
      <div className="button-container">
        <AddCourseForm forms={forms} setForms={setForms} />
        <button className="calc-button" onClick={calculateGPA}>
          Calculate GPA
        </button>
      </div>
      <h3 className="gpa-label">GPA: </h3>
      <h2 className="actual-gpa">{gpa}</h2>
    </div>
  );
}
