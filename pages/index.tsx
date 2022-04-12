import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, {siteTitle} from "components/layout";
import utilStyles from "styles/utils.module.css";
import { getSortedPostsData } from "lib/posts";
import SiteMap from "./sitemap.xml";


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
			<section className={utilStyles.introduce}>
				<p>사적인 경험과 공적인 지식들을 공유합니다.</p>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<div className={utilStyles.flex} style={{justifyContent:'flex-start', gap: '1rem'}}>
					<Link href="/reviews"><a><h2 className={utilStyles.headingLg}>경험</h2></a></Link>
					<Link href="/articles"><a><h2 className={utilStyles.headingLg}>지식</h2></a></Link>
				</div>
			</section>
		</Layout>
	);
}
