import React from 'react';
import styles from './search-box.module.css';
import search from './search.png';

const searchBox = () => {
    return(
        <div className={styles.pi}>
            <hr className={`${styles['horizontal-line']}`}/>
            <div className='search-bar-container'>
                <img className={`${styles['search-icon']}`} src={search} alt="Search Icon"/>
                <input className={`${styles['search-bar']}`} type="text" placeholder="What are you looking for?" />
            </div>
            <button className={`${styles['search-button']}`} type="button">Search</button>
            <hr className={`${styles['horizontal-line']}`}/>
        </div>
    );
}

export default searchBox;