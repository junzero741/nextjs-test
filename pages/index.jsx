import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import homepageStyles from "./index.module.css";
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
			<section className={homepageStyles.introduce}>
				<p>개인적인 경험과 개발 지식들을 공유합니다.</p>
			</section>

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
