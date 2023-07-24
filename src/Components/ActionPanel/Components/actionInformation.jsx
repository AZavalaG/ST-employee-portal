import React from 'react';

import styles from '../action-panel.module.css';

const ActionInformation = (props) => {
    // Logic in here...
    return ( 
        <div className={styles.actionInformation}>
            <div className={styles.actionUserImg}>
                <img src='https://media.licdn.com/dms/image/C560BAQF5fahZ9fi6Xg/company-logo_200_200/0/1667944478593?e=2147483647&v=beta&t=JGaRP07EKg_f4OfRGM8SN8IWaSZnh9NJIFwLAeDl_P8' alt='User Profile Image' />
            </div>
            <h2>{props.name}</h2>
            <span>{props.cell}</span>
        </div>
     );
}
 
export default ActionInformation;