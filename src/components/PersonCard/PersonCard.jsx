import React from "react";
import "./styles/PersonCard.css";
import EditIcon from "./assets/icons/Edit_fill.svg";
import Flag from "./assets/flags/mex.png";


export default function PersonCard(props) {
  const { DataUser } = props;
const handleClick=()=>{
  props.onClick();
}
  return (
    <div className="layout">
      <div className="profile-image-space">
        <div className="profile-image-content"></div>
      </div>
      <label className="label-name">
        {DataUser?.name ? DataUser.name : "NOMBRE"}
        <br />
        {DataUser?.lastName ? DataUser.lastName : "APELLIDOS"}
      </label>
      <label className="label-variable">Cell:</label>
      <label className="label-value ">
        {DataUser?.cell ? DataUser.cell : "Celula"}
      </label>
      <label className="label-variable">Role:</label>
      <label className="label-value ">
        {DataUser?.rol ? DataUser.rol : "Cargo/Rol"}
      </label>
      <label className="label-variable">Email:</label>
      <label className="label-value ">
        {DataUser?.email ? DataUser.email : "Correo Electronico"}
      </label>
      <label className="label-variable">Birthday:</label>
      <label className="label-value ">
        {DataUser?.birthday ? DataUser.birthday : "11/12/1991"}
      </label>

      <label className="label-variable">Country:</label>
      <img
        className="container-flag"
        alt="flag_img"
        src={DataUser?.flagURL ? DataUser.flagURL : Flag}
      ></img>
      <div className="person-card-edit-button" onClick={handleClick}>
        <label>Edit</label> <img src={EditIcon} alt="edit_icon" style={{marginLeft:"15px"}}></img>
      </div>
    </div>
  );
}
