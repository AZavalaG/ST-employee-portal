import React from 'react';

import ActionPanel from '../../Components/ActionPanel';
import Navbar from '../../Components/Navbar';

import styles from './homePage.module.css';
import homeImg from '../../Assets/homePageImg.png';

const HomePage = (props) => {
    return ( 
        <div className="layoutContainer">
            <Navbar />
            <ActionPanel />
            <main className="mainContainer">
                <div className={styles.homePage}>
                    <h1>{`Welcome, ${props.name}`}</h1>
                    <span>Please select a module or search something!</span>
                    <img src={homeImg} alt="Finger touching something" />
                </div>
            </main>
        </div>
     );
}
 
export default HomePage;