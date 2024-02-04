
import { createClient } from '@supabase/supabase-js'


export async function connectDB ({dbUrl, dbKey}: {dbUrl: string, dbKey: string}) {
  const supabase = createClient(dbUrl, dbKey);
  return supabase;
}


