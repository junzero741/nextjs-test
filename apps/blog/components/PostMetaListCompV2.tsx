import { PostMetaV2 } from "@/domain/PostMeta";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function PostMetaListCompV2({ posts }: { posts: PostMetaV2[] }) {
  return (
          <div className='flex flex-col'>
                  {posts.map((post, idx) => (
                    <PostMetaListItemComp key={post.id} post={post} isLast={idx === posts.length - 1} />
                  ))}
          </div>
  );
}

function PostMetaListItemComp({ post, isLast }: { post: PostMetaV2, isLast: boolean }) {
       const title = post.title.replaceAll('', ' ');

  return (
    <Link href={`/posts/${post.id}`} className={
      twMerge(
        'font-semibold text-lg py-8 hover:text-gray-500',
        !isLast && 'border-b border-black'
        )}>
          {title}
          <div>{post.title}</div>
          <div>작성일 : {post.created_at}</div>
    </Link>
  );
}