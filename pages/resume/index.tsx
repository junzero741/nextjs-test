import { GetStaticProps } from 'next'
import Head from 'next/head'
// import Link from 'next/link'
import Layout, { siteTitle } from 'components/layout'
import { getSortedPostsData } from 'lib/posts'
// import Date from 'components/date'
import SiteMap from 'pages/sitemap.xml'
import NavBar from 'components/NavBar'
import { Introduce } from 'pages'

// 이력서는 방문 유저에 의해 페이지에 변해야 할 게 없으므로 정적 페이지 생성(SSG) 사용.
// Static Generation
export const getStaticProps: GetStaticProps = async (context) => {
  // const staticGeneratedArticles = getSortedPostsData('articles')
  return {
    props: {
      // staticGeneratedArticles,
    },
  }
}

export default function ArticlesPage({
  staticGeneratedArticles,
}: {
  staticGeneratedArticles: { date: string; title: string; id: string }[]
}) {
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
        <NavBar currentPageId="resume" />
        레주메
      </div>
    </Layout>
  )
}
