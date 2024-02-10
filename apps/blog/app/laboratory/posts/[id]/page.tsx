import { Metadata, ResolvingMetadata } from 'next'
import ResourceRepository from '@/repository/ResourceRepository';
import { Suspense } from 'react';
import { fetchAs } from '@repo/my-utils';
import { DOMAIN } from '@/utils/constants';
import {PostMetaV2} from '@/domain/PostMeta';
import PostContentComp from '@/components/PostContentComp';


// type Props = {
//   params: { slug: string }
// }

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {

//     const post = await ResourceRepository.getPost(decodeURIComponent(params.slug))

//     const parentTitle = (await parent).title?.absolute;
//     const title = `${post.postName.replaceAll('-', ' ')} - ${parentTitle}`;
//     const previousImages = (await parent).openGraph?.images || []

//     // TODO : 한글 인코딩 문제 해결
//     // const image = await fetch(`${DOMAIN.origin}/api/og?title=${title}`);

//   return {
//     title: title,
//             openGraph: {
//                     title: title,
//                     type: 'article',
//                     publishedTime: post.publishedAt.toISOString(),
//                     images: [...previousImages],
//             }
//   }
// }


export default async function PostDetail({ params }: { params: { id: string } }) {
   const requestURL = `${DOMAIN.origin}/api/post?id=${params.id}`
   const postMeta = await fetchAs<PostMetaV2>(requestURL);
   const postContent = await ResourceRepository.getResource(postMeta.resource_path);

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