import React from "react";

import Flag from "../../Assets/mex.png";

import styles from "./personCard.module.css";

const PersonCard = (props) => {

  const {name, position, cell, project, country } = props.user;
 
  return (
    <div className={styles.personCard}>
      <h3>{name}</h3>
      <div className={styles.cardItem}>
        <span>{position}</span>
        <label>Position</label>
      </div>
      <div className={styles.cardItem}>
        <span>{project}</span>
        <label>Project</label>
      </div>
      <div className={styles.cardItem}>
        <span>{cell}</span>
        <label>cell</label>
      </div>
      <div className={styles.cardItem}>
        <img src={Flag} alt={`${country} flag`} />
        <span>{country}</span>
        <label>Country</label>
      </div>
    </div>
  );
}

export default PersonCard;