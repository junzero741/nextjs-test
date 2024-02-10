import { NextRequest, NextResponse } from "next/server";
import PostRepositoryV2 from '@/repository/PostRepositoryV2';

export async function GET(request: NextRequest) {
  try {
    const id = Number(request.nextUrl.searchParams.get('id'));
   const res = await PostRepositoryV2.getPost(id);

   return NextResponse.json(res, {status: 200})
  }
  catch(e) {
    return NextResponse.json(null, {status: 500})
  }
 
}