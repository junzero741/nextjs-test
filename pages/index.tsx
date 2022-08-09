import Head from 'next/head'
import styled from 'styled-components'
import Layout, { siteTitle } from 'components/layout'
import SiteMap from './sitemap.xml'
import NavBar from 'components/NavBar'

// Static Generation
// export const getStaticProps: GetStaticProps = async context => {
// 		const staticGeneratedArticles = getSortedPostsData("articles");
// 		return {
// 			props: {
// 				staticGeneratedArticles,
// 			},
// 		};
// }

// Server-Side Rendering
// export async function getServerSideProps(context) {

//   const res = await fetch("https://admin.jejodo.life/wp-json/v1/routes")
//   const serverSideRenderingPostsData = await res.json();
//   return {
//     props: {
//       // props for your component
//       serverSideRenderingPostsData
//     }
//   }
// }

export default function HomePage() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <SiteMap />
      </Head>
      <Introduce>
        <p>사적인 경험과 공적인 지식들을 공유합니다.</p>
      </Introduce>
      <NavBar />
    </Layout>
  )
}

export const Introduce = styled.section`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color.gray};
`
