import { Courseform } from "./Courseform";

export function CourseList({ forms }) {
  return (
    <div className="course-list">
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
