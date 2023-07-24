import React from "react";
import styles from "./personCard.module.css";
import EditIcon from "../../Assets/Edit_fill.svg";
import Flag from "../../Assets/mex.png";

const PersonCard = (props) => {
  const { DataUser } = props;
const handleClick=()=>{
  props.onClick();
}
  return (
    <div className={styles.layout}>
      <div className={styles.profileImageSpace}>
        <div className={styles.profileImageContent}></div>
      </div>
      <label className={styles.labelName}>
        {DataUser?.name ? DataUser.name : "NOMBRE"}
        <br />
        {DataUser?.lastName ? DataUser.lastName : "APELLIDOS"}
      </label>
      <label className={styles.labelVariable}>Cell:</label>
      <label className={styles.labelValue}>
        {DataUser?.cell ? DataUser.cell : "Celula"}
      </label>
      <label className={styles.labelVariable}>Role:</label>
      <label className={styles.labelValue}>
        {DataUser?.rol ? DataUser.rol : "Cargo/Rol"}
      </label>
      <label className={styles.labelVariable}>Email:</label>
      <label className={styles.labelValue}>
        {DataUser?.email ? DataUser.email : "Correo Electronico"}
      </label>
      <label className={styles.labelVariable}>Birthday:</label>
      <label className={styles.labelValue}>
        {DataUser?.birthday ? DataUser.birthday : "11/12/1991"}
      </label>

      <label className={styles.labelVariable}>Country:</label>
      <img
        className={styles.containerFlag}
        alt="flag_img"
        src={DataUser?.flagURL ? DataUser.flagURL : Flag}
      ></img>
      <div className={styles.personCardEditButton} onClick={handleClick}>
        <label>Edit</label> <img src={EditIcon} alt="edit_icon" style={{marginLeft:"15px"}}></img>
      </div>
    </div>
  );
}

export default PersonCard;