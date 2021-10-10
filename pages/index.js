import Layout from "../components/Layout"
import ListTasks from "../components/ListTasks"
import SinResultados from "../components/SinResultados"
import { useTasks } from "../hooks/useTasks"


export default function Home() {
  const { tasks } = useTasks()
  return (
    <Layout>
      {
        tasks.length === 0
          ? <SinResultados />
          : tasks.map(t => <ListTasks title={t.title} id={t.id} date={t.date} state={t.state} description={t.description} key={t.id} />)
      }
    </Layout>
  )
}
