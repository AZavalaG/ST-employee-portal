import styles from './profileUser.module.css';
import React, { Component } from 'react';
import Navbar from '../Navbar';
import { SearchBar } from '../SearchBar';
/*const role = localStorage.getItem("role");*/
import UserInfo from "./UserInfo";
import UpdateProfile from "./UpdateProfile"
import UpdateProfileHR from "./UpdateProfileHR"


class ProfileUsr extends Component {
    render() {
        return (
            <div>  
                <div className= {styles.menubar}>
                <Navbar/>         
                </div> 
                <div className={styles.sidebar}>
                <SearchBar />
                </div>
                <div className={styles.profile}>
                    <div className={styles.user_avatar}>
                        <figure className={styles.profilePicture}>
                            <img className={`${styles['rounded-photo']}`} src='https://images.pexels.com/photos/1381112/pexels-photo-1381112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                        </figure> 
                        <h1 className={styles.title}>{DataUser?.name || ''}</h1>
                    </div>
                    <button className={styles.return} onClick={console.log('test')}>
                        <img src="https://github.com/AZavalaG/ST-employee-portal/blob/EP-E02H01/src/Assets/back-cta.png?raw=true" width="20" height="20"/>
                    </button>
                <UserInfo />
                </div>
            </div>
        );
    }
}
 export default ProfileUsr;