import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import PageNotFound from "./pages/PageNotFound";
import Add from "./pages/Add";
import TaskPanel from "./components/TaskPanel";
import { TaskProvider } from "./contexts/TaskContext";

function App() {
  return (
    <div className="app">
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="TaskManager" element={<Start />} />
            <Route path="TaskManager/home" element={<Home />}>
              <Route index replace element={<Navigate to="task" />} />
              <Route path="task" element={<TaskPanel />} />
            </Route>
            <Route path="TaskManager/add" element={<Add />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </div>
  );
}

export default App;
