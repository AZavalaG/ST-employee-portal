import React from 'react';

import styles from '../action-panel.module.css';
import searchIcon from '../../../Assets/search.png';

const SearchBox = () => {
    return ( 
        <div className={styles.actionSerchBox}>
            <form className={styles.actionSerchBoxForm}>
                <div className={styles.actionSerchBoxInput}>
                    <img src={searchIcon} alt="Search Icon" />
                    <input type='text' name='actionSearch' placeholder='Looking for something?' />
                </div>
                <button className={styles.actionSerchBoxBtn}>Search</button>
            </form>
        </div>
     );
}
 
export default SearchBox;