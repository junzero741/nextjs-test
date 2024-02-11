import ResourceRepository from '@/repository/ResourceRepository';
import { Suspense } from 'react';
import PostContentComp from '@/components/PostContentComp';
import { getPost } from '@/utils/data';


export default async function PostDetail({ params }: { params: { id: string } }) {
   const postMeta = await getPost(Number(params.id));
   const postContent = postMeta ? await ResourceRepository.getResource(postMeta.legacy_resource_path) : null;

   return (
     <div>
       <Suspense fallback={<>Loading...</>}>
       <div className='py-4 border-b-4 border-gray-900'>
         <PostTitle>{postMeta?.title}</PostTitle>
         <div className='text-sm text-gray-500'>작성일: {new Date(postMeta?.created_at!).toLocaleDateString()}</div>
       </div>
       <PostContentComp content={postContent?.resourceContent!} />
       </Suspense>
     </div>
   );
}

type PostTitleProps = {} & JSX.IntrinsicElements['div'];

function PostTitle({ children }: PostTitleProps) {
       return (
               <h1 className='text-4xl font-bold'>{children}</h1>
       );
}