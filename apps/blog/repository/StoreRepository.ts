import {connectDB} from '@repo/database';

class StoreRepository {
  async connectStore () {
    try {

      console.log("KEY: ", process.env.SUPABASE_KEY);
      console.log("URL: ", process.env.SUPABASE_URL);
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