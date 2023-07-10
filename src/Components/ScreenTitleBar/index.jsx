import React from "react";
import styles from  '../ScreenTitleBar/screenTitleBar.module.css'
import iconBack from '../../Assets/back-cta.png';

const ScreenTitleBar = ({ title}) => {

  const handleBack = ()=> {
    
  }

  return (
    <div className={styles.container}>
      <div>
        <img onClick={handleBack} src={iconBack}></img>
      </div>
      <div className={styles.title}><p>{title}</p> </div>
    </div>
  );
};

export default ScreenTitleBar;
