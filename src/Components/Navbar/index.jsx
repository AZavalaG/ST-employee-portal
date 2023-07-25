import React from 'react';
import { Link } from 'react-router-dom';

import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/sop">SOP</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/people">People</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/time">Time Management</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>

            <ul className={styles.profileSection}>
                <li className={styles.logOutItem}>Logout</li>
            </ul>
        </nav>
    );
};

export default Navbar;