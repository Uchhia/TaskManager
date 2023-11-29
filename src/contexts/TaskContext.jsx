import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

// const taskList = [
//   {
//     id: 1,
//     name: "todo",
//     description: "asdasfsfs",
//     priority: "low",
//     status: "peding",
//   },
//   {
//     id: 2,
//     name: "todo",
//     description: "asdasfsfs",
//     priority: "medium",
//     status: "peding",
//   },
//   {
//     id: 3,
//     name: "todo",
//     description: "asdasfsfs",
//     priority: "high",
//     status: "peding",
//   },
//   {
//     id: 4,
//     name: "todo",
//     description: "asdasfsfs",
//     priority: "high",
//     status: "peding",
//   },
//   {
//     id: 4,
//     name: "todo",
//     description: "asdasfsfs",
//     priority: "high",
//     status: "peding",
//   },
//   {
//     id: 6,
//     name: "todo",
//     description: "asdasfsfs",
//     priority: "high",
//     status: "peding",
//   },
//   {
//     id: 7,
//     name: "todo",
//     description: "asdasfsfs",
//     priority: "high",
//     status: "peding",
//   },
//   {
//     id: 8,
//     name: "todo",
//     description: "asdasfsfs",
//     priority: "high",
//     status: "peding",
//   },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { ...action.payload }];
    case "delete":
      return [...state.filter((task) => task.id !== action.payload)];
    case "statusChange":
      return state.map((task) =>
        task.id === action.payload ? { ...task, status: !task.status } : task
      );
    case "edit":
      return state.map((task) =>
        task.id === action.payload.id
          ? {
              ...action.payload,
            }
          : task
      );
    case "fetchByid":
      return state.map((task) => (task.id === action.payload ? task : {}));
    default:
      throw new Error("not a valid action");
  }
};

const TaskContext = createContext();

function TaskProvider({ children }) {
  const localdata = JSON.parse(localStorage.getItem("tasks"))
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, dispatch] = useReducer(reducer, localdata);

  useEffect(
    function () {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    [tasks]
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function useTask() {
  return useContext(TaskContext);
}

export { TaskProvider, useTask };
