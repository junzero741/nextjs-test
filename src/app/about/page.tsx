import PostComp from "@/components/PostComp";
import PostRepositoryImpl from "@/repository/PostRepositoryImpl";
import { Suspense } from "react";

export default async function About() {
  const post = await PostRepositoryImpl.getPost(decodeURIComponent('testPost2'));

  return (
    <div>
      <h1 className='text-4xl font-bold'>About me</h1>
      <div>call : {'testPost2'}</div>
      <Suspense fallback={<>Loading...</>}>
        <PostComp post={post} />
      </Suspense>
    </div>
  )
}
