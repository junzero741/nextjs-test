import { PostMetaV2 } from '@/domain/PostMeta';
import PostsRepository from '@/repository/PostsRepository';
import PostRepositoryV2 from '@/repository/PostRepositoryV2';


export const getPosts = async (): Promise<PostMetaV2[] | undefined | null> => {
  try {
    const res = await PostsRepository.getAllPosts();
    return res?.data;
  }
  catch(e) {
    return []
  }
}

export const getPost = async (id: number): Promise<PostMetaV2 | undefined | null> => {
  try {
    const res = await PostRepositoryV2.getPost(id);
    return res;
  }
  catch(e) {
    return null;
  }
}