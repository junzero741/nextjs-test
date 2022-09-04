import Layout, { siteTitle } from 'components/Layout'
import { Todo } from 'utils/types'
import Link from 'next/link'
import Head from 'next/head'
import SiteMap from 'pages/sitemap.xml'
import NavBar from 'components/NavBar'
import { Introduce } from 'pages'
import { BASE_API_URL } from 'utils/vars'
import { Text } from 'components/Text'

interface IndexProps {
  todos: Array<Todo>
}

export default function TodoIndex(props: IndexProps) {
  const { todos } = props

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <SiteMap />
      </Head>
      <Introduce>
        <Text as="p">사적인 경험과 공적인 지식들을 공유합니다.</Text>
      </Introduce>

      <div>
        <NavBar currentPageId="todos" />
        <div>
          <Text as="h1">My Todo List</Text>
          <h2>Click On Todo to see it individually</h2>
          {/* MAPPING OVER THE TODOS */}
          {todos.map((t) => (
            <div key={t._id}>
              <Link href={`/api/todos/${t._id}`}>
                <h3 style={{ cursor: 'pointer' }}>
                  {t.item} - {t.completed ? 'completed' : 'incomplete'}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch((BASE_API_URL + '/todos') as string)
  const todos = await res.json()

  return {
    props: { todos },
  }
}
