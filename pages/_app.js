import { TasksProvider } from '../context/taskContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <TasksProvider>
          <Component {...pageProps} />
        </TasksProvider>
}

export default MyApp
