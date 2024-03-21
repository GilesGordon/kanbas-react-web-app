import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <div>
      <div className="wd-flex-row-container wd-justify-end wd-topbar">
        <button type="button" className="btn btn-outline-secondary">
          Collapse All
        </button>
        <button type="button" className="btn btn-outline-secondary">
          View Progress
        </button>
        <select>
          <option>Publish All</option>
          <option>Publish All Modules and Items</option>
          <option>Publish Modules Only</option>
          <option>Unpublish All</option>
        </select>
        <button type="button" className="btn btn-outline-secondary">Module</button>
      </div>
      <div className="d-flex justify-content-between">
      <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <div>
          <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button className="btn btn-primary wd-button-adjustments" onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
        </div>
      </div>

      <textarea value={module.description}
        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}/>
      <ul className="list-group wd-modules">
        {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <button className="btn btn-primary wd-button-adjustments" onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button className="btn btn-danger wd-button-adjustments" onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: any, index: number) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModuleList;