import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import SiteMap from "./sitemap.xml";

const useFileSystemAsDB = true;
const useApiAsDB = true;

// Static Generation
export async function getStaticProps() {
	if (useFileSystemAsDB) {
		const staticGenerationPostsData = getSortedPostsData();
		return {
			props: {
				staticGenerationPostsData,
			},
		};
	}
}

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

export default function HomePage({ staticGenerationPostsData, serverSideRenderingPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
				<SiteMap />
			</Head>
			<section className={utilStyles.headingMd}>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			<div style={{ border: "1px solid black" }}>
				Read{" "}
				<Link href="/posts/first-post">
					<a>this page!</a>
				</Link>
			</div>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{staticGenerationPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}><a>{title}</a></Link>							
							<br />
							<small className={utilStyles.lightText}><Date dateString={date} /></small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
