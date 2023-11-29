import { useTask } from "./../contexts/TaskContext";
import TaskItem from "./TaskItem";
import style from "./TaskList.module.css";

function TaskList() {
  const { tasks } = useTask();
  console.log(tasks);

  return (
    <div className={style.list}>
      {tasks.length > 0
        ? tasks.map((task) => <TaskItem task={task} key={task.id} />)
        : ""}
    </div>
  );
}

export default TaskList;
