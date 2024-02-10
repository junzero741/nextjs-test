import StoreRepository from './StoreRepository';

class PostsRepository extends StoreRepository {
  constructor() {
    super();
  }

  async getAllPosts() {
    const store = await super.connectStore();

    const result = await store?.from('posts').select('*').order('created_at', {ascending: false});
    return result;
  }

}

const instance = new PostsRepository();
export default instance;