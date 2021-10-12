import { useRouter } from "next/router"
import { AiOutlineDelete } from "react-icons/ai";
import { useTasks } from "../hooks/useTasks";

export default function ListTasks({title, description, id, date, state}) {
	const {showOptionTask} = useTasks()
	const {push} = useRouter()
	return (
		<a onClick={() => push(`/editTask/${id}`)}>
			<div  className="bg-gray-50 shadow-sm px-3 py-5 rounded-lg mt-4 hover:shadow-md cursor-pointer flex justify-between align-center">
				<div className="mx-2 flex items-center justify-center">
					<input type="checkbox" onClick={e => {e.stopPropagation(); showOptionTask(id)}} className="text-blue-300 mr-5 h-6 w-6" />
					<div className="w-72">
						<p className="font-bold">{title}</p>
						<p className="font-light">{description}</p>
					</div>
				</div>

				<div className="flex items-center">
					<small className="mx-10 font-semibold text-xs bg-blue-100 rounded-md p-1 text-center text-blue-400">{date}</small>

					{state === 'finalizada' && <small className="mx-10 font-semibold text-xs bg-green-100 rounded-md p-1 text-center text-green-400">{state}</small>}
					{state === 'en curso' && <small className="mx-10 font-semibold text-xs bg-yellow-100 rounded-md p-1 text-center text-yellow-400">{state}</small>}
					{state === 'sin iniciar' && <small className="mx-10 font-semibold text-xs bg-red-100 rounded-md p-1 text-center text-red-400">{state}</small>}
					{/* <button className="bg-red-200 p-2 rounded-md" onClick={(e) => {e.stopPropagation(); deleteTask(id)}}>
						<AiOutlineDelete className="text-red-600"/>
					</button> */}
				</div>
			</div>
		</a>
	)
}
