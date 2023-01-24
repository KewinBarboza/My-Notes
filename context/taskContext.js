import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

const INITIAL_TASKS = [
  {
    id: "1",
    title: "first task",
    description: "some task",
    date: "09/10/2021",
    state: "finished",
  },
  {
    id: "2",
    title: "second task",
    description: "some task",
    date: "09/10/2021",
    state: "in progress",
  },
  {
    id: "3",
    title: "three task",
    description: "some task",
    date: "09/10/2021",
    state: "wait",
  },
];

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [optionTasksIsVisible, setOptionTasksIsVisible] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const showOptionTask = (id = null) => {
    let tasks = [...selectedTasks];

    tasks.push(id);
    setSelectedTasks(tasks);

    id ? setOptionTasksIsVisible(true) : setOptionTasksIsVisible(false);
  };

  const createTask = (title, description, date, state) =>
    setTasks([...tasks, { title, description, id: uuid(), date, state }]);

  const updateTask = (id, updateTask) =>
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updateTask } : task
      ),
    ]);

  const deleteTask = (id) =>
    setTasks([...tasks.filter((task) => task.id !== id)]);

  const deleteSelectedTask = () => {
    const deleteTask = tasks.filter(
      (t) => selectedTasks.includes(t.id) !== true
    );
    setTasks(deleteTask);
    setOptionTasksIsVisible(false);
  };

  const changeState = () => {
    setTasks([
      ...tasks.map((task) =>
        selectedTasks.includes(task.id) === true
          ? {
              ...task,
              state: "finished",
            }
          : task
      ),
    ]);

    setOptionTasksIsVisible(false);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask,
        showOptionTask,
        deleteSelectedTask,
        setOptionTasksIsVisible,
        changeState,
        optionTasksIsVisible,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
