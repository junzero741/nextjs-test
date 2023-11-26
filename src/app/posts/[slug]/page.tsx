import PostComp from '@/components/PostComp';
import PostRepositoryImpl from '@/repository/PostRepositoryImpl';

export default async function PostDetail({ params }: { params: { slug: string } }) {
  const post = await PostRepositoryImpl.getPost(params.slug);
  
  return (
    <div>
      {!!post ? <PostComp post={post} /> : <>Loading...</>}
    </div>
  )
}
