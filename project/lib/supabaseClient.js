import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qdheeflofrvnkfdodwbp.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_SOQXzzoZM05CaJsOv7KlQQ_Qhf8pU0Z';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveSubmission(formType, lang, data) {
  const { error } = await supabase.from('form_submissions').insert({ form_type: formType, lang, data });
  if (error) {
    console.error('Failed to save submission:', error.message);
  }
}
