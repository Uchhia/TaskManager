import { useNavigate } from "react-router-dom";
import style from "./Start.module.css";

function Start() {
  const navigate = useNavigate("");
  return (
    <div className={style.start}>
      <h1>Task Manager💻</h1>
      <div className="button">
        <button onClick={() => navigate("/TaskManager/home")}>Start</button>
      </div>
    </div>
  );
}

export default Start;
