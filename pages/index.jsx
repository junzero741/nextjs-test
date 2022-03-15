import Head from "next/head"
import Link from "next/link"
import Layout, {siteTitle} from "../components/layout"
import utilStyles from '../styles/utils.module.css'

export default function HomePage() {
  
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
    </Layout>
  )
}