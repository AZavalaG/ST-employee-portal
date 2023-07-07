import React, { useState } from "react";
import style from "./style.module.css";

const UpdateProfileHR = (props) => {
    let json = '{'+
      '"email":"test@stgroup.mx",'+
      '"position":"Servicenow Developer Junior",'+
      '"projectsAssigned":"test | test",'+
      '"cell":"Cell 1",'+
      '"manager":"Jorge",'+      
      '"linkedInUrl":"https://linkedin.com",'+
      '"phoneNumber":"1234-1234"'+
    '}'

    const DataUser = JSON.parse(json); //props;

    const [email, setEmail] = useState(null)
    const [position, setPosition] = useState(null)
    const [projectsAssigned, setProjectsAssigned] = useState(null)
    const [cell, setCell] = useState(null)
    const [manager, setManager] = useState(null)
    const [linkedInUrl, setlinkedInUrl] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)

    const onSubmit = async (e) => {
      e.preventDefault();
      console.log('working')
      
    };

    return (
      <div className={style.container}>
          <h4 className={`${style.title}`}>Information</h4>

          <div className={`${style.information_data}`}>
            <form className={`${style.information_form}`} onSubmit={onSubmit}>
              <div className={`${style.labels}`}>
                <label for="email" className={style.labelInfo}>Email</label>
                <label for="position" className={style.labelInfo}>Position</label>
                <label for="projectsAssigned" className={style.labelInfo}>Projects Assigned</label>
                <label for="cell" className={style.labelInfo}>Cell</label>
                <label for="manager" className={style.labelInfo}>Manager</label>
                <label for="linkedInUrl" className={style.labelInfo}>LinkedIn URL</label>
                <label for="phoneNumber" className={style.labelInfo}>Phone Number</label>
              </div>
              <div className={`${style.inputs}`}>
                <input className={style.inputInfo} type="email" name="Email" id="email" value={DataUser?.email || ''} onChange={(e) => setEmail(e.target.value)} />
                <input className={style.inputInfo} type="text" name="Position" id="position" value={DataUser?.position || ''} onChange={(e) => setPosition(e.target.value)} />
                <p className={style.inputInfo}>{DataUser?.projectsAssigned ? DataUser.projectsAssigned : "ㅤ"}</p>
                <input className={style.inputInfo} type="text" name="Cell" id="cell" value={DataUser?.cell || ''} onChange={(e) => setCell(e.target.value)} />
                <input className={style.inputInfo} type="text" name="Manager" id="manager" value={DataUser?.manager || ''} onChange={(e) => setManager(e.target.value)} />
                <input className={style.inputInfo} type="text" name="LinkedIn URL" id="linkedInUrl" value={DataUser?.linkedInUrl || ''} onChange={(e) => setlinkedInUrl(e.target.value)} />
                <input className={style.inputInfo} type="text" name="Phone Number" id="phoneNumber" value={DataUser?.phoneNumber || ''} onChange={(e) => setPhoneNumber(e.target.value)} />
              </div>
              <button type="submit">Save</button>
            </form>
          </div>
      </div>
    );
  };

export default UpdateProfileHR;