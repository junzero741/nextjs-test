import Head from "next/head"
import Link from "next/link"
import Layout, {siteTitle} from "../components/layout"
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

const useFileSystemAsDB = true;
const useApiAsDB = true;

// Static Generation
export async function getStaticProps() {

  if(useFileSystemAsDB) {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }
}

// Server-Side Rendering
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//       foo: '33'
//     }
//   }
// }


export default function HomePage({allPostsData}) {
  return (
    <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    <div style={{border: '1px solid black'}}>Read{' '} <Link href="/posts/first-post"><a>this page!</a></Link></div>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}