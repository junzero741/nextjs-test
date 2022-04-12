import Head from "next/head";
import Layout from "components/layout";
import { getAllPostIds, getPostData } from "lib/posts";
import Date from "components/date";
import utilStyles from "styles/utils.module.css";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Article({ postData }: { postData: { title: string; date: string; contentHtml: string; id: string } }) {
	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={utilStyles.headingXl}>{postData.title}</h1>
				<br />
				<div className={utilStyles.lightText}>
					<Date dateString={postData.date} />
				</div>
				<br />
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = () => {
	const paths = getAllPostIds("articles");
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id as string, "articles");
	return {
		props: {
			postData,
		},
	};
};
