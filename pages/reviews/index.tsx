import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from 'components/layout'
import { getSortedPostsData } from 'lib/posts'
import Date from 'components/date'
import SiteMap from 'pages/sitemap.xml'
import NavBar from 'components/NavBar'
import { Introduce } from 'pages'
import PostListLayout from 'components/PostListLayout'
import { Text } from 'components/Text'

export const getStaticProps: GetStaticProps = async () => {
  const staticGeneratedReviews = getSortedPostsData('reviews')
  return {
    props: {
      staticGeneratedReviews,
    },
  }
}

export default function ReviewsPage({ staticGeneratedReviews }: { staticGeneratedReviews: { date: string; title: string; id: string }[] }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <SiteMap />
      </Head>
      <Introduce>
        <Text as="p">사적인 경험과 공적인 지식들을 공유합니다.</Text>
      </Introduce>

      <PostListLayout>
        <NavBar currentPageId="reviews" />
        <ul>
          {staticGeneratedReviews.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/reviews/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </PostListLayout>
    </Layout>
  )
}
