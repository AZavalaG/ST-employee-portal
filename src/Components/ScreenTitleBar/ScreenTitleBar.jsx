import React from "react";
import styles from  '../ScreenTitleBar/screenTitleBar.module.css'
import iconBack from '../../Images/back-cta.png'
export const ScreenTitleBar = ({ name = "" }) => {

  const handleBack = ()=> {
    
  }

  return (
    <div className={styles.container}>
      <div>
        <img onClick={handleBack} src={iconBack}></img>
      </div>
      <div className={styles.title}><p>{name}</p> </div>
    </div>
  );
};
