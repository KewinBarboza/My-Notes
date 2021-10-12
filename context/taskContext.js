import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid'

export const TaskContext = createContext()

const INITIAL_TASKS = [
  { id: '1', title: 'first task', description: 'some task', date: '09/10/2021', state: 'finalizada' },
  { id: '2', title: 'second task', description: 'some task', date: '09/10/2021', state: 'en curso' },
  { id: '3', title: 'three task', description: 'some task', date: '09/10/2021', state: 'sin iniciar' }
]

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [optionTasksIsVisible, setOptionTasksIsVisible] = useState(false)

  const showOptionTask = (id = null) => id ? setOptionTasksIsVisible(true) : setOptionTasksIsVisible(false)
  const createTask = (title, description, date, state) => setTasks([...tasks, { title, description, id: uuid(), date, state }])
  const updateTask = (id, updateTask) => setTasks([...tasks.map(task => task.id === id ? { ...task, ...updateTask } : task)])
  const deleteTask = (id) => setTasks([...tasks.filter(task => task.id !== id)])

  return <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask, showOptionTask, optionTasksIsVisible }}>{children}</TaskContext.Provider>
}