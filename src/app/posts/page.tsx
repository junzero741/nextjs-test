import PostRepositoryImpl from '@/repository/PostRepositoryImpl';
import PostMetaListComp from '@/components/PostMetaListComp';

export default async function Posts() {
  const posts = await PostRepositoryImpl.getPosts();
  
  return (
    <div>
      {!!posts ? <PostMetaListComp posts={posts} /> : <>Loading...</>}
    </div>
  )
}
