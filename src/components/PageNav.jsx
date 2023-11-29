import { Link } from "react-router-dom";
import style from "./PageNav.module.css";

function PageNav() {
  return (
    <div>
      <ul className={style.nav}>
        <li className={style.navLeft}>
          <Link className={style.navlink} to="/TaskManager">
            Task Manager
          </Link>
        </li>

        <li>
          <div className={style.navRight}>
            <Link className={style.navlink} to="/TaskManager/home/task">
              Task List
            </Link>
            <Link className={style.navlink} to="/TaskManager/add">
              Add Task
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
