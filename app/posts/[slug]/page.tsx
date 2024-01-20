import dynamic from 'next/dynamic';
import PostComp from '@/components/PostComp';
import PostRepositoryImpl from '@/repository/PostRepositoryImpl';
const PageHitsComp = dynamic(() => import('@/components/PageHitsComp'), { ssr: false });
import { Suspense } from 'react';

export default async function PostDetail({ params }: { params: { slug: string } }) {
	const post = await PostRepositoryImpl.getPost(decodeURIComponent(params.slug));

	return (
		<div>
			<Suspense fallback={<>Loading...</>}>
				<PageHitsComp />
				<PostComp post={post} />
			</Suspense>
		</div>
	);
}
