import Head from "next/head";
import Link from "next/link";
import Layout, {siteTitle} from "components/layout";
import utilStyles from "styles/utils.module.css";
import SiteMap from "./sitemap.xml";
import NavBar from "components/NavBar";


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
				<NavBar />
			</section>
		</Layout>
	);
}
