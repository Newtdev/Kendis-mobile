import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5weXlkZ3doaXRuamRweXVwcmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODczNDIwMTEsImV4cCI6MjAwMjkxODAxMX0.5w4E_v-61_gER7PSigSSfSQVefkoYvsxvpir9imPsGw';
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabaseUrl = process.env.SUPABASE_URL;
const SUPABASE_URL = 'https://npyydgwhitnjdpyuprew.supabase.co';

// console.log(supabaseKey, SUPABASE_URL);

export const supabase = createClient(SUPABASE_URL, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
