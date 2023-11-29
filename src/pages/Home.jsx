import { Outlet } from "react-router-dom";
import PageNav from "./../components/PageNav";
import style from "./Home.module.css";
import { useTask } from "../contexts/TaskContext";
function Home() {
  return (
    <div className={style.home}>
      <PageNav />
      <Outlet />
    </div>
  );
}

export default Home;
