import PostMeta from '@/domain/PostMeta';
import Link from 'next/link';

export default function PostMetaListComp({ posts }: { posts: PostMeta[] }) {
	return (
		<div className='flex flex-col gap-6'>
			{posts.map((post) => (
				<PostMetaListItemComp key={`${post.title}${post.lastModifed}`} post={post} />
			))}
		</div>
	);
}

function PostMetaListItemComp({ post }: { post: PostMeta }) {
	return (
		<div className='flex flex-col gap-1 py-3 border-b border-gray-800'>
			<Link href={`/posts/${post.title}`} className='font-semibold text-lg'>
				{post.title}
			</Link>
			<div className='text-gray-500'>마지막 수정일 : {post.lastModifed.toLocaleDateString()}</div>
		</div>
	);
}
