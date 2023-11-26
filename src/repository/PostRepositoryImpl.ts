import PostRepository from "./PostRepository";
import awsS3Utils from "@/utils/awsS3Utils";

class PostRepositoryImpl implements PostRepository {

  store = awsS3Utils;
  postExtension = '.md';

  async getPost (postName: string) {
     const response = await this.store.getResource(`posts/${postName}${this.postExtension}`)
     if(response) {
       const postContent = await response?.Body?.transformToString();
       return {postName, postContent: postContent || ''};
     }
  }

  async getPosts () {
    const response = await this.store.getResources('posts/');
    if(response) {
      return response.map((resource) => ({
        lastModifed: resource.LastModified!,
        title: resource.Key?.replace(`${this.postExtension}`, '')!
      }));
    }
  }
  
}

const instance = new PostRepositoryImpl();
export default instance;