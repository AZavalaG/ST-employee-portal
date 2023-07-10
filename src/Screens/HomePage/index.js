import React from 'react';

import styles from './homePage.module.css';
import homeImg from '../../Assets/homePageImg.png';

const HomePage = (props) => {
    return ( 
        <div className={styles.homePage}>
            <h1>{`Welcome, ${props.name}`}</h1>
            <span>Please select a module or search something!</span>
            <img src={homeImg} alt="Finger touching something" />
        </div>
     );
}
 
export default HomePage;