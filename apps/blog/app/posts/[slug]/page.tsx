import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic';
import PostComp from '@/components/PostComp';
import PostRepositoryImpl from '@/repository/PostRepositoryImpl';
const PageHitsComp = dynamic(() => import('@/components/PageHitsComp'), { ssr: false });
import { Suspense } from 'react';
import { DOMAIN } from '@/utils/constants';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
 
	const post = await PostRepositoryImpl.getPost(decodeURIComponent(params.slug))
 
	const parentTitle = (await parent).title?.absolute;
	const title = `${post.postName.replaceAll('-', ' ')} - ${parentTitle}`;
	const previousImages = (await parent).openGraph?.images || []

	// TODO : 한글 인코딩 문제 해결
	// const image = await fetch(`${DOMAIN.origin}/api/og?title=${title}`);
	
  return {
    title: title,
		openGraph: {
			title: title,
			type: 'article',
			publishedTime: post.publishedAt.toISOString(),
			images: [...previousImages],
		}
  }
}
 

export default async function PostDetail({ params }: { params: { slug: string } }) {
	const post = await PostRepositoryImpl.getPost(decodeURIComponent(params.slug));
	

	return (
		<div>
			<Suspense fallback={<>Loading...</>}>
				<PostComp post={post} />
				{/* TODO : 페이지 조회수가 아닌 게시글 조회수로 변경 */}
				<PageHitsComp />
			</Suspense>
		</div>
	);
}
