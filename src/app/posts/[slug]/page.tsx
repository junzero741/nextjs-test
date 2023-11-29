import PostComp from '@/components/PostComp';
import PostRepositoryImpl from '@/repository/PostRepositoryImpl';
import { Suspense } from 'react';

export default async function PostDetail({ params }: { params: { slug: string } }) {
  const post = await PostRepositoryImpl.getPost(decodeURIComponent('testPost2'));
  
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
      <div>call : {decodeURIComponent(params.slug)}</div>
        <PostComp post={post} />
      </Suspense>
    </div>
  )
}
