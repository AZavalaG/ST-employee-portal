import styles from './profileUser.module.css';
import React, { Component } from 'react';
import Navbar from '../Navbar';
import { SearchBar } from '../SearchBar';
/*const role = localStorage.getItem("role");*/


class ProfileUsr extends Component {
    render() {
        return (
            <div >  
                <div className= {styles.menubar}>
                <Navbar/>         
                </div> 
                <div className={styles.sidebar}>
                <SearchBar />
                </div>
            </div>
        );
    }
}
 export default ProfileUsr;