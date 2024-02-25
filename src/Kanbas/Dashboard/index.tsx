import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css"
function Dashboard() {
    return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses (7)</h2>
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