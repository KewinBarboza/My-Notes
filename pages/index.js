import Layout from "../components/Layout"
import ListTasks from "../components/ListTasks"
import SinResultados from "../components/SinResultados"
import { useTasks } from "../hooks/useTasks"
import { AiOutlineDelete } from "react-icons/ai";


export default function Home() {
  const { tasks, optionTasksIsVisible } = useTasks()
  return (
    <Layout>
      {optionTasksIsVisible && <div className="px-3 py-5 mt-4 cursor-pointer flex justify-between align-center">
        <button className="bg-red-200 p-2 rounded-md">
          <AiOutlineDelete className="text-red-600" />
        </button>
      </div>}
      {
        tasks.length === 0
          ? <SinResultados />
          : tasks.map(t => <ListTasks title={t.title} id={t.id} date={t.date} state={t.state} description={t.description} key={t.id} />)
      }
    </Layout>
  )
}
