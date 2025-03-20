import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a single Supabase client instance
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Function to set user authentication token dynamically.
 * @param {string} supabaseAccessToken - User's access token.
 */
const supabaseClient = async (supabaseAccessToken) => {
    if (!supabaseAccessToken) {
        console.warn("No Supabase access token provided!");
        return supabase;
    }

    // Set user authentication token properly
    await supabase.auth.setSession({
        access_token: supabaseAccessToken,
        refresh_token: "", // Optional: if you have a refresh token, pass it here
    });

    return supabase;
};

export { supabase, supabaseClient };
