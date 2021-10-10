import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useTasks } from "../hooks/useTasks";
import { useRouter } from "next/router";

export default function TasksFormPage() {
	const [task, setTask] = useState({title:'', description:''})
	const {createTask, updateTask, tasks} = useTasks()
	const {push, query} = useRouter()

	useEffect(() => {
		if (query.id) {
			const taskFount = tasks.find(task => task.id === query.id)
			setTask({title: taskFount.title, description: taskFount.description})
		}
	}, [])

	const handleChange = e => {
		const {name, value} = e.target
		setTask({...task, [name]:value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!query.id) {
			createTask(task.title, task.description)
		}else{
			updateTask(query.id, task)
		}
		push('/')
	}
	return (
		<Layout>
			<form className="mt-5 bg-gray-100" onSubmit={handleSubmit}>
					<h1 className="text-center my-10 text-3xl font-bold">{!query.id ? 'Add new note' : 'Update note'}</h1>

					<label htmlFor="title" className="font-semibold">Title</label>
					<input name="title" value={task.title} id="title" onChange={handleChange} className="shadow-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-50 px-2 py-3 rounded-md w-full mb-5" placeholder="add title note" type="text" />

					<label htmlFor="description" className="font-semibold">Description</label>
					<textarea 
						name="description" 
						id="description" 
						onChange={handleChange} 
						className="shadow-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-50 px-2 py-3 rounded-md w-full mb-5" 
						placeholder="add a description"
						cols="30"
						rows="10"
						value={task.description}
					></textarea>

					<button disabled={!task.title} className="mx-auto w-full font-bold px-5 rounded-lg py-2 disabled:opacity-50 active:bg-blue-300 hover:bg-blue-600 shadow-md  bg-blue-500 text-white">Save</button>
			</form>
		</Layout>
	)
}
