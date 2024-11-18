import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qhsotbygjbndqqgjiaxa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoc290YnlnamJuZHFxZ2ppYXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3NjY2NTcsImV4cCI6MjA0NzM0MjY1N30.5Sf-srONNFeF8VHOQJnUGiSSa0Fq4RvGtWVMIn8zRE0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
