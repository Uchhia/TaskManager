import React, { useEffect, useState } from "react";
import "./Edit.css";
import { useTask } from "../contexts/TaskContext";
let data = {};
const TaskFormModal = ({ isOpen, setOpen, task }) => {
  const [name, setTaskName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const { dispatch } = useTask();

  //   useEffect(function () {
  //     data = dispatch({ type: "fetchByid", payload: id });
  //   }, []);

  const handleUpdate = () => {
    // Perform any validation or additional logic before updating
    const newTask = {
      id: task.id,
      name,
      description,
      priority,
    };
    dispatch({ type: "edit", payload: newTask });
    // Clear the form fields
    setTaskName("");
    setDescription("");
    setPriority("");
    setOpen((prev) => !prev);
  };

  return (
    <div className={`modal ${isOpen ? "open" : "closed"}`}>
      <div className="modal-content">
        <span
          className="close close-button"
          onClick={() => setOpen((prev) => !prev)}
        >
          Cancel
        </span>
        <h2>Task Form</h2>
        <label>
          Task Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default TaskFormModal;
