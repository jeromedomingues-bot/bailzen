// ════════════════════════════════════════════════════════
//  CONFIGURATION SUPABASE — À remplir après création du projet
//  Instructions : voir GUIDE_MISE_EN_LIGNE.md
// ════════════════════════════════════════════════════════

const SUPABASE_URL  = 'https://bmahugvboemiizoisdix.supabase.co';       // Ex: https://abcdefgh.supabase.co
const SUPABASE_KEY  = 'sb_publishable_DE7bfzrFDLMLN9_-5gRatA_yJuagnXd';  // La clé "anon public" de votre projet

// Initialisation du client Supabase (accessible dans toutes les pages)
window._supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
