import { Courseform } from "./Courseform";
import './CourseList.css';

export function CourseList({ forms }) {
  return (
    <div className="course-list">
      <div className="label-container">
        <h3 className="classColLabel">Courses</h3>
        <h3 className="phaseColLabel">Phase</h3>
        <h3 className="percentageColLabel">%</h3>
        <h3 className="gradeColLabel">Grade</h3>
      </div>
      {forms.map((form, index) => (
        <div key={index}>{form}</div>
      ))}
    </div>
  );
}

export function AddCourseForm({ forms, setForms }) {
  const handleAddition = () => {
    // Add a new form to the list of forms
    setForms([...forms, <Courseform key={forms.length} />]);
  };
  return (
    <div>
      <button type="submit" onClick={handleAddition}>
        Add Course
      </button>
    </div>
  );
}
