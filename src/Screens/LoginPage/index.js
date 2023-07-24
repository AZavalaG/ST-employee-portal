import React from 'react';
import styles from './login.module.css';
import stLogoBco from '../../Assets/S&T_Logo_Blanco.png';
import { createClient } from '@supabase/supabase-js';

const LoginPage = () => {
    const getSSOAuthUrl = async (event) => {
        const sp = createClient(process.env.REACT_APP_VITE_SUPABASE_URL, process.env.REACT_APP_VITE_SUPABASE_ANON_KEY);
        await sp.auth.signInWithOAuth({
            provider: 'google'
        })
    }
    return ( 
        <div className={styles.loginPage}>
            <div className={styles.loginPageImg}>
                <h1>Employee Portal</h1>
                <img src={stLogoBco} alt='Strategy & Technology Group Logo Blanco' />
            </div>
            <main className={styles.loginPageMain}>
                <h2>Hello Again!</h2>
                <span>Please log in to continue</span>
                <a className={styles.loginPageHelp}>Need help?</a>
                <button onClick={getSSOAuthUrl}>Google</button>
            </main>
        </div>
        
     );
}
 
export default LoginPage;

// TODO: Complete Login Page