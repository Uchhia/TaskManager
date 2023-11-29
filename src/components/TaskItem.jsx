import style from "./TaskItem.module.css";
import { MdDelete } from "react-icons/md";

import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useTask } from "../contexts/TaskContext";
import TaskFormModal from "./Edit";
import { useState } from "react";

function TaskItem({ task }) {
  const [isOpen, setOpen] = useState(false);
  const { dispatch } = useTask();
  return (
    <div
      className={`${style.taskItem} ${style[task.priority]}  ${
        task.status && style.complete
      }`}
    >
      <div className={style.header}>
        <h4>
          {task.name.length > 20
            ? task.name.substring(0, 20) + "..."
            : task.name}
        </h4>
        <span>
          <FaRegEdit
            onClick={() => setOpen((prev) => !prev)}
            className={`${task.status && style.disabled}`}
          />
          <TaskFormModal
            isOpen={isOpen}
            setOpen={setOpen}
            task={task}
            disabled={task.status}
          />
          <MdOutlineDelete
            onClick={() => dispatch({ type: "delete", payload: task.id })}
          />
        </span>
      </div>
      <div>
        <p>{task.description}</p>
      </div>
      <div className={style.status}>
        <label>Complete</label>
        <input
          disabled={task.status}
          type="checkbox"
          onChange={() => dispatch({ type: "statusChange", payload: task.id })}
        />
      </div>
    </div>
  );
}

export default TaskItem;
