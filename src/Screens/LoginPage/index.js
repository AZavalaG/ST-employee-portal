import React from 'react';
import styles from './login.module.css';
import stLogoBco from '../../Assets/S&T_Logo_Blanco.png';

const LoginPage = () => {
    return ( 
        <div className={styles.loginPage}>
            <div className={styles.loginPageImg}>
                <h1>Employee Portal</h1>
                <img src={stLogoBco} alt='Strategy & Technology Group Logo Blanco' />
            </div>
            <main className={styles.loginPageMain}>
                <h2>Hello Again!</h2>
                <span>Please log in to continue</span>
                <form className={styles.loginPageForm}>
                    <input  type='email' name='email' placeholder='Email' />
                    <input type='password' name='password' placeholder='Password' />
                    <button>Log In</button>
                </form>
                <a className={styles.loginPageHelp}>Need help?</a>
            </main>
        </div>
        
     );
}
 
export default LoginPage;

// TODO: Complete Login Page