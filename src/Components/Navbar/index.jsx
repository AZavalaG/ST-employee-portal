import React from 'react';
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={`${styles['nav-content']} ${styles['ul-no_style']}`}>
                <li className={`${styles['nav-item']} ${styles['space-between_item']} ${styles['link-item']}`}>Home</li>
                <li className={`${styles['nav-item']} ${styles['space-between_item']} ${styles['link-item']}`}>SOP</li>
                <li className={`${styles['nav-item']} ${styles['space-between_item']} ${styles['link-item']}`}>People</li>
                <li className={`${styles['nav-item']} ${styles['space-between_item']} ${styles['link-item']}`}>Time Management</li>
                <li className={`${styles['nav-item']} ${styles['space-between_item']} ${styles['link-item']}`}>Projects</li>
            </ul>

            <ul className={`${styles['nav-content']} ${styles['ul-no_style']}`}>
                <li className={`${styles['nav-item']} ${styles.destructive}`}>Logout</li>
                <li>
                        <figure className={styles.profilePicture}>
                        <NavLink to="/ProfileUser">
                            <img className={`${styles['rounded-photo']}`} src='https://images.pexels.com/photos/1381112/pexels-photo-1381112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Profile"/>
                        </NavLink>
                        </figure> 
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;