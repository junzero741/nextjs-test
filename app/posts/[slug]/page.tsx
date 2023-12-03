import PostComp from '@/components/PostComp';
import PostRepositoryImpl from '@/repository/PostRepositoryImpl';
import { Suspense } from 'react';

export default async function PostDetail({ params }: { params: { slug: string } }) {
  const post = await PostRepositoryImpl.getPost(decodeURIComponent(params.slug));
  
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <PostComp post={post} />
      </Suspense>
    </div>
  )
}
