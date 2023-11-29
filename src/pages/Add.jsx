import { useState } from "react";
import PageNav from "../components/PageNav";
import { useTask } from "../contexts/TaskContext";
import style from "./Add.module.css";

function Add() {
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");
  const [priority, setPriority] = useState("low");

  const { dispatch } = useTask();

  const newtask = {
    id: Number(Date.now()),
    name,
    description,
    priority,
    status: false,
  };

  const handleform = (e) => {
    e.preventDefault();
    // setName("");
    // setdescription("");
    return dispatch({ type: "add", payload: newtask });
  };
  return (
    <div>
      <PageNav />
      <div className={style.main}>
        <form onSubmit={handleform} className={style.form}>
          <div>
            <label>Task Name</label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type task name here..."
            ></input>
          </div>
          <div>
            <label> Task Description</label>
            <textarea
              required
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Description..."
            />
          </div>
          <div>
            <label>Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option selected value="low">
                Low
              </option>
            </select>
          </div>
          <button>Add Task</button>
        </form>
        <div>
          <img src="./image2.png" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Add;
