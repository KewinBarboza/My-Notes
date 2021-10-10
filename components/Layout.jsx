import { useTasks } from '../hooks/useTasks'
import Navbar from './Navbar'

export default function Layout({children}) {
	const {tasks} = useTasks()
	return (
		<div className="h-screen bg-gray-100">
			<Navbar numberOfTasks={tasks.length}/>
			<main className="max-w-screen-lg mx-auto">
				{children}
			</main>
		</div>
	)
}
