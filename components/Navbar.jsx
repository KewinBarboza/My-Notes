import Link from 'next/link'
export default function Navbar({numberOfTasks}) {
  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500 px-3 py-4 shadow-md">
      <div className="flex items-center max-w-screen-lg mx-auto">
        <Link href="/">
          <a><h1 className="font-black text-gray-50 text-2xl mr-3 font-mono">My-Notes</h1></a>
        </Link>
        
        <div className="flex-grow text-right">
          <Link href="/new">
            <a  className="hover:bg-gray-50 hover:text-gray-900 px-3 py-2 text-gray-50 font-bold rounded-lg">Add notes</a>
          </Link>
          <span className="text-sm mx-2 bg-blue-300 text-blue-600 font-semibold py-1 px-2 rounded-full">{numberOfTasks} tasks</span>
        </div>
      </div>
    </header>
  )
}
