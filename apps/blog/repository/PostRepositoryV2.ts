import StoreRepository from './StoreRepository';

class PostRepository extends StoreRepository {

  constructor() {
    super();
  }

  async getPost(id: number) {
    const store = await super.connectStore();

    try {
      const result = await store?.from('posts').select().eq('id', id);
      return result?.data?.[0];
    }
    catch(e) {
      console.error('store connection failed');
    }
  }
 }

const instance = new PostRepository();
export default instance;