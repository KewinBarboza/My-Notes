import { useRouter } from "next/router"
import { AiOutlineDelete } from "react-icons/ai";
import { useTasks } from "../hooks/useTasks";

export default function ListTasks({title, description, id, date, state}) {
	const {showOptionTask, deleteTask} = useTasks()
	const {push} = useRouter()
	return (
		<a onClick={() => push(`/editTask/${id}`)}>
			<div  className="bg-gray-50 shadow-sm px-3 py-5 rounded-lg mt-4 hover:shadow-md cursor-pointer flex justify-between align-center">
				<div className="mx-2 flex items-center justify-center">
					<input type="checkbox" id={`${id}`} onClick={e => {e.stopPropagation(); showOptionTask(id, e)}} className="text-blue-300 mr-5 h-6 w-6" />
					<div className="w-72">
						<p className="font-bold">{title}</p>
						<p className="font-light">{description}</p>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-3 items-center">
					<p className="font-semibold text-xs bg-blue-100 rounded-full p-2 text-center text-blue-400">{date}</p>

					{state === 'finished' && <p className="font-semibold text-xs bg-green-100 rounded-full p-2 text-center text-green-400">{state}</p>}
					{state === 'in progress' && <p className="font-semibold text-xs bg-yellow-100 rounded-full p-2 text-center text-yellow-400">{state}</p>}
					{state === 'wait' && <p className="font-semibold text-xs bg-indigo-100 rounded-full p-2 text-center text-indigo-400">{state}</p>}
					<button className="flex text-red-600 items-center gap-2 bg-red-200 p-2 rounded-md" onClick={(e) => {e.stopPropagation(); deleteTask(id)}}>
            <AiOutlineDelete className="text-red-600"/> Delete
					</button>
				</div>
			</div>
		</a>
	)
}
