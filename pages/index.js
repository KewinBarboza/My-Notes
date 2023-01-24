import Layout from "../components/Layout";
import ListTasks from "../components/ListTasks";
import SinResultados from "../components/SinResultados";
import { useTasks } from "../hooks/useTasks";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";

export default function Home() {
  const { tasks, optionTasksIsVisible, deleteSelectedTask, changeState } =
    useTasks();
  return (
    <Layout>
      {optionTasksIsVisible && (
        <div className="px-3 py-5 mt-4 cursor-pointer flex align-center gap-2">
          <button
            className="bg-red-200 p-2 rounded-md flex text-red-600 gap-2 items-center"
            onClick={() => deleteSelectedTask()}
          >
            <AiOutlineDelete className="text-red-600" />
            Delete
          </button>

          <button
            className="bg-green-200 p-2 rounded-md flex text-green-600 gap-2 items-center"
            onClick={() => changeState()}
          >
            <AiOutlineCheckCircle className="text-green-600" />
            Finish
          </button>
        </div>
      )}
      {tasks.length === 0 ? (
        <SinResultados />
      ) : (
        tasks.map((t) => (
          <ListTasks
            title={t.title}
            id={t.id}
            date={t.date}
            state={t.state}
            description={t.description}
            key={t.id}
          />
        ))
      )}
    </Layout>
  );
}
