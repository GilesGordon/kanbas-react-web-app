import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css"
import * as db from "./../Database";
function Dashboard(
    { courses, course, setCourse, addNewCourse,
      deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void; }) {

    const[numCourses, setNumCourses] = useState(db.courses.length)

    return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control" 
      onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
      <input value={course.number} className="form-control" 
      onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
      <input value={course.startDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date" 
      onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>
      <button className="btn btn-success" onClick={(event) => {
        setNumCourses(numCourses + 1)
        addNewCourse()
        }} >
        Add
      </button>
      <button className="btn btn-primary" onClick={updateCourse} >
        Update
      </button>

      <hr />
      <h2>Published Courses ({numCourses})</h2>
      <hr />
      <div className="row row-cols-auto">
          {courses.map((course) => (
            <div key={course._id} className= "wd-card-padding">
            <div className= "col wd-course-width card">
                <img src={`/images/${course.image}`} className="card-img-top wd-card-height" />
                <div className="card-body">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                        className="card-title stretched-link wd-card-body-specs"
                    >
                        {course.number} {course.name}
                    <div>
                        <button className="btn btn-danger" onClick={(event) => {
                            event.preventDefault();
                            setNumCourses(numCourses - 1)
                            deleteCourse(course._id);
                            }}>
                            Delete
                        </button>
                        <button className="btn btn-primary" onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                            }}>
                            Edit
                        </button>
                    </div>

                    </Link>
                    <p className="card-text">{course.startDate} to {course.endDate}</p>
                </div>
            </div>
            </div>
          ))}
    </div>
    </div>
    )
}
export default Dashboard;