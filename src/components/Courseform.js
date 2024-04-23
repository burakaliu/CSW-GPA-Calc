import React, { useState } from 'react';
import './Courseform.css'


export function Courseform(){
    return(
      <form className='course-form'>
        <label>
          <input type="text" name="name" placeholder="Course Name"/>
        </label>
        <label>
          Phase: 
          <CoursePhasing />
        </label>
        <label>
          %:
          <input type="text" name="grade" placeholder={Math.round((Math.random()*20)+80)}/>
        </label>
        <label>
            <p>A+</p>
        </label>
      </form>
    )
}

  
function CoursePhasing(){

    const [selectedOption, setSelectedOption] = useState(null);
  
    const Option = ({ optionName, selected, onSelect }) => {
      return (
        <div
          className={`option ${selected ? 'selected' : ''}`}
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