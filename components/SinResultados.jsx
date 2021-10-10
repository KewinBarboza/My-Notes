import Link from 'next/link'
import { AiOutlineEdit } from "react-icons/ai";

export default function SinResultados() {
    return (
        <div className="flex flex-col items-center justify-center p-5 mt-5">
            <div className="rounded-full h-36 w-36 my-4 flex items-center justify-center bg-blue-300">
                <AiOutlineEdit className="text-8xl text-blue-500" />
            </div>
            <p className="text-2xl font-semibold text-center mb-5">Add new note</p>           
            <Link href="/new" className="mx-auto">
                <a  className="bg-blue-500 hover:bg-blue-600 px-3 py-3 text-center w-1/4 text-gray-50 font-bold mb-3 rounded-lg">Add note</a>
            </Link>
        </div> 
    )
}
