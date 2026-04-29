import { createClient } from '@supabase/supabase-js';

// Supabase connectie
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://gtuwlrpskugvdvluyslf.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_AM7KfvYB6yNY72C6SEQclw_KBAnOnZs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
