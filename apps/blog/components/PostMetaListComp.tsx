import PostMeta from '@/domain/PostMeta';
import Link from 'next/link';
import {twMerge} from 'tailwind-merge';

export default function PostMetaListComp({ posts }: { posts: PostMeta[] }) {
	return (
		<div className='flex flex-col'>
			{posts.map((post, idx) => (
				<PostMetaListItemComp key={`${post.title}`} post={post} isLast={idx === posts.length - 1} />
			))}
		</div>
	);
}

function PostMetaListItemComp({ post, isLast }: { post: PostMeta, isLast: boolean }) {
	const title = post.title.replaceAll('-', ' ');

	return (
		<Link href={`/posts/${post.title}`} className={
			twMerge(
				'font-semibold text-lg py-8 hover:text-gray-500',
				 !isLast && 'border-b border-black'
	  )}>
			{title}
		</Link>
	);
}
