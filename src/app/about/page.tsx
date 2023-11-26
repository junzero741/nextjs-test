import PostRepositoryImpl from "@/repository/PostRepositoryImpl";

export default async function About() {
  const post = await PostRepositoryImpl.getPost(decodeURIComponent('testPost2'));

  return (
    <div>
      <h1 className='text-4xl font-bold'>About me</h1>
      <div>{post?.postName}</div>
      <div>{post?.postContent}</div>
    </div>
  )
}
