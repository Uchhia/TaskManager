import style from "./TaskPanel.module.css";
import TaskList from "./TaskList";
function TaskPanel() {
  return (
    <div className={style.panel}>
      <TaskList />
    </div>
  );
}

export default TaskPanel;
