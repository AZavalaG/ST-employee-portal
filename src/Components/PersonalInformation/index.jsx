import React from 'react';
import styles from './personal-information.module.css'

const PersonalInfo = () => {
    return(
        <div className={styles.pi}>
            <h1 className={`${styles['app-name']}`}>Employee Portal</h1>
            <figure className={styles.profilePicture}>
                <img className={`${styles['rounded-photo']}`} src='https://images.pexels.com/photos/1381112/pexels-photo-1381112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Action Panel Profile Photo'/>
            </figure>
            <h2 className={`${styles['title-first-name']}`}>Nombre</h2>
            <h2 className={`${styles['title-last-name']}`}>Apellido</h2>
            <p className={`${styles['subtitle']}`}>Célula 1</p>
        </div>

    );
}

export default PersonalInfo;