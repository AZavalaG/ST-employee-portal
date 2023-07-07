import styles from './profileUser.module.css';
import React, { Component } from 'react';
import Navbar from '../Navbar';
/*const role = localStorage.getItem("role");*/
import UserInfo from "./UserInfo";
import UpdateProfile from "./UpdateProfile"
import UpdateProfileHR from "./UpdateProfileHR"
import ColorBlock from '../ActionPanel';


class ProfileUsr extends Component {
    render() {
        let json = '{'+
      '"name":"Name Last Name",'+
      '"email":"test@stgroup.mx",'+
      '"position":"Servicenow Developer Junior",'+
      '"projectsAssigned":"test | test",'+
      '"cell":"Cell 1",'+
      '"manager":"Jorge",'+      
      '"linkedInUrl":"https://linkedin.com",'+
      '"phoneNumber":"1234-1234"'+
    '}'

    const DataUser = JSON.parse(json);
        return (
            <div>  
                <div className= {styles.menubar}>
                <Navbar/>         
                </div> 
                <div className={styles.sidebar}>
                <ColorBlock />
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