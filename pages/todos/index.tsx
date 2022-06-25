import { Todo } from 'utils/types'
import Link from 'next/link'
import Layout, { siteTitle } from 'components/layout'
import Head from 'next/head'
import SiteMap from 'pages/sitemap.xml'
import NavBar from 'components/NavBar'
import { Introduce } from 'pages'
import { BASE_API_URL } from 'utils/vars'

// Define the component props
interface IndexProps {
  todos: Array<Todo>
}

// Define the page component
export default function TodoIndex(props: IndexProps) {
  const { todos } = props

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <SiteMap />
      </Head>
      <Introduce>
        <p>사적인 경험과 공적인 지식들을 공유합니다.</p>
      </Introduce>

      <div>
        <NavBar currentPageId="todos" />
        <div>
          <h1>My Todo List</h1>
          <h2>Click On Todo to see it individually</h2>
          {/* MAPPING OVER THE TODOS */}
          {todos.map(t => (
        <div key={t._id}>
          <Link href={`/api/todos/${t._id}`}>
            <h3 style={{ cursor: "pointer" }}>
              {t.item} - {t.completed ? "completed" : "incomplete"}
            </h3>
          </Link>
        </div>
      ))}
        </div>
      </div>
    </Layout>
  )
}

// GET PROPS FOR SERVER SIDE RENDERING
export async function getServerSideProps() {
  // get todo data from API
  const res = await fetch(BASE_API_URL + "/todos" as string)
  const todos = await res.json()
  

  // return props
  return {
    props: { todos },
  }
}
