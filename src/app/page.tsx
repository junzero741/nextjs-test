import Image from 'next/image'
import Link from 'next/link'
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import Post from '@/components/Post';

const client = new S3Client({
  region: 'ap-northeast-2',
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!
  }
});

export const main = async () => {
  const command = new GetObjectCommand({
    Bucket: "blog.resource",
    Key: "posts/about.md",
  });

  try {
    const response = await client.send(command);
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    const str = await response.Body?.transformToString();
    return str;
  } catch (err) {
    console.error(err);
  }
};



export default async function Home() {
  const data = await main();



  return (
    <div className="prose dark:prose-invert">
      <Post markdownString={data} />
    </div>
  )
}
