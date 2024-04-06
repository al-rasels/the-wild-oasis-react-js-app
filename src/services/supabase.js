import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://khnnysuwudzgvtmjgvil.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtobm55c3V3dWR6Z3Z0bWpndmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNzk2NjYsImV4cCI6MjAyMDY1NTY2Nn0.z7yG3t5D45cpLLiFE71wDPkITCcL5482u8WBF4m_Li4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
