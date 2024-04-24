import React, { useState } from "react";
import "./Courseform.css";

export function Courseform() {
  const [grade, setGrade] = useState(Math.round(Math.random() * 20 + 80));

  const handleGradeChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue)) {
      const letterGrade = calculateLetterGrade(newValue);
      setGrade(letterGrade);
    }
  };

  function calculateLetterGrade(grade) {
    if (grade >= 93) {
      return "A";
    } else if (grade >= 90) {
      return "A-";
    } else if (grade >= 87) {
      return "B+";
    } else if (grade >= 83) {
      return "B";
    } else if (grade >= 80) {
      return "B-";
    } else if (grade >= 77) {
      return "C+";
    } else if (grade >= 73) {
      return "C";
    } else if (grade >= 70) {
      return "C-";
    } else if (grade >= 66) {
      return "D";
    } else {
      return "F";
    }
  }

  return (
    <form className="course-form">
      <label>
        <input type="text" name="name" placeholder="Course Name" />
      </label>
      <label>
        Phase:
        <CoursePhasing />
      </label>
      <label>
        %:
        <input
          type="text"
          name="grade"
          placeholder={Math.round(Math.random() * 20 + 80)}
          onChange={handleGradeChange}
        />
      </label>
      <label>
        <p className="grade">{grade}</p>
      </label>
    </form>
  );
}

function CoursePhasing() {
  const [selectedOption, setSelectedOption] = useState(null);

  const Option = ({ optionName, selected, onSelect }) => {
    return (
      <div
        className={`option ${selected ? "selected" : ""}`}
        onClick={() => onSelect(optionName)}
      >
        {optionName}
      </div>
    );
  };

  // Function to handle option selection
  const selectOption = (optionName) => {
    setSelectedOption(optionName);
  };

  return (
    <div className="options-bar">
      <Option
        optionName={3}
        selected={selectedOption === 3}
        onSelect={selectOption}
      />
      <Option
        optionName={4}
        selected={selectedOption === 4}
        onSelect={selectOption}
      />
      <Option
        optionName={5}
        selected={selectedOption === 5}
        onSelect={selectOption}
      />
      <Option
        optionName={"AP"}
        selected={selectedOption === "AP"}
        onSelect={selectOption}
      />
    </div>
  );
}