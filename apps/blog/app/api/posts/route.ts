import { NextResponse } from 'next/server';
import PostsRepository from '@/repository/PostsRepository';


export async function GET() {
  try {
   const res = await PostsRepository.getAllPosts();
   return NextResponse.json(res?.data, {status: 200})
  }
  catch(e) {
    return NextResponse.json(null, {status: 500})
  }
 
}