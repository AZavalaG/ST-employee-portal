import React from "react";
import styles from  '../ScreenTitleBarTeams/screenTitleBarTeams.module.css'
import imgBack from '../../Imagenes/back-cta.png'
export const ScreenTitleBarTeams = ({ name = "Team's" }) => {
  const handleBack = () => {
    
  };

  return (
    <div className={styles.container}>
      <div>
        <img onClick={handleBack} src={imgBack} alt="Back" title="Back"></img>
      </div>
      <div className={styles.title}><p>{name} Timecards</p> </div>
    </div>
  );
};
