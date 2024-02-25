import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://mebufpaptlametqdhnja.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lYnVmcGFwdGxhbWV0cWRobmphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNjc5MjUsImV4cCI6MjAyMzg0MzkyNX0.G09bhwebvluzbJE97jBEyqnHMXgOCvVijJrmM1ynFSc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
