import ResourceRepository from '@/repository/ResourceRepository';
import { Suspense } from 'react';
import { fetchAs } from '@repo/my-utils';
import { DOMAIN } from '@/utils/constants';
import {PostMetaV2} from '@/domain/PostMeta';
import PostContentComp from '@/components/PostContentComp';


export default async function PostDetail({ params }: { params: { id: string } }) {
   const requestURL = `${DOMAIN.origin}/api/post?id=${params.id}`
   const postMeta = await fetchAs<PostMetaV2>(requestURL);
   const postContent = await ResourceRepository.getResource(postMeta.legacy_resource_path);

   return (
     <div>
       <Suspense fallback={<>Loading...</>}>
       <div className='py-4 border-b-4 border-gray-900'>
         <PostTitle>{postMeta.title}</PostTitle>
         <div className='text-sm text-gray-500'>작성일: {new Date(postMeta.created_at).toLocaleDateString()}</div>
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