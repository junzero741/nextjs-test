import {connectDB} from '@repo/database';

class StoreRepository {
  async connectStore () {
    try {
      const database = await connectDB(
        {
          dbKey: process.env.SUPABASE_KEY || '',
          dbUrl: process.env.SUPABASE_URL || '',
        });
      return database;
    } catch(e) {
      console.log(e);
    }
  }
}

export default StoreRepository;