import PostMetaListCompV2 from '@/components/PostMetaListCompV2';
import { getPosts } from '@/utils/data';

export default async function Posts() {
  const posts = await getPosts();

  return <div>{posts ? <PostMetaListCompV2 posts={posts} /> : <>Loading...</>}</div>;
}