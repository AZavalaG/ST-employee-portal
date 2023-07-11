import styles from './profileUser.module.css';
import React, { useEffect,useState, Component } from 'react';
import Navbar from '../Navbar';
//import { SearchBar } from '../SearchBar';
/*const role = localStorage.getItem("role");*/
import ColorBlock from '../ActionPanel';


//class ProfileUsr extends Component {
const ProfileUsr = () => {
    //render() {
        const [hrUpdate, setHrUpdate] = useState(false)

        const data = [
            {
            name: 'Name Last Name',
            email: 'test@stgroup.mx',
            position: 'Developer HR',
            projectsAssigned: 'test | test',
            cell: 'Cell 1',
            manager: 'Jorge',
            linkedInUrl: 'https://linkedin.com',
            phoneNumber: '1234-1234',
            salary : '30000',
            esqueme: 'Mixto'
            },];

        const [employeeData, setEmployeeData] = useState(data)

        const onSubmit = async (e) => {
        e.preventDefault();

        delSaveButton()
        console.log(employeeData)
        };

    
        const onChangeInput = (e) => {
        const { name, value } = e.target
    
        const editData = employeeData.map((item) =>
            name ? { ...item, [name]: value } : item
        )
    
        setEmployeeData(editData)
        addSaveButton()
        }

        useEffect(() => {
        if(employeeData[0].position.indexOf('HR') >= 1){ //what defines a HR Representative
            setHrUpdate(true)
        }
        },[employeeData])

        const addSaveButton = () =>{
            const parent = document.getElementById("saveButton")
            delSaveButton()
            const saveButton = document.createElement('button')
            saveButton.innerHTML = 'Save'
            saveButton.setAttribute("id", "button1")
            saveButton.setAttribute("type", "submit")
            parent.appendChild(saveButton)
        }

        const delSaveButton = () =>{
        const parent = document.getElementById("saveButton")
            const child = document.getElementById("button1")
            if (child != null){
            parent.removeChild(child)
            }
        }

        return (
            <div className={styles.container}>  
                <div>
                    <div className={styles.user_avatar}>
                        <figure className={styles.profilePicture}>
                            <img className={`${styles['rounded-photo']}`} src='https://images.pexels.com/photos/1381112/pexels-photo-1381112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                        </figure> 
                        <h1 className={styles.name}>{employeeData[0].name || ''}</h1>
                    </div>
                    </div>
                    <button className={styles.return} onClick={console.log('test')}>
                        <img src="https://github.com/AZavalaG/ST-employee-portal/blob/EP-E02H01/src/Assets/back-cta.png?raw=true" width="20" height="20"/>
                    </button>
                    <div>
                    <h4 className={`${styles.title}`}>Information</h4>

                    <div className={`${styles.information_data}`}>
                        <form className={`${styles.information_form}`} onSubmit={onSubmit}>
                        <div className={`${styles.labels}`}>
                            <label className={styles.labelInfo}>Email</label>
                            <label className={styles.labelInfo}>Position</label>
                            <label className={styles.labelInfo}>Projects Assigned</label>
                            <label className={styles.labelInfo}>Cell</label>
                            <label className={styles.labelInfo}>Manager</label>
                            <label className={styles.labelInfo}>LinkedIn URL</label>
                            <label className={styles.labelInfo}>Phone Number</label>
                            {hrUpdate ? (
                            <>
                            <label className={styles.labelInfo}>Salary</label>
                            <label className={styles.labelInfo}>Esqueme</label>
                            </>) : ("")}
                        </div>
                        {hrUpdate?(
                            <div>
                            {employeeData.map(({name, email, position, projectsAssigned, cell, manager, linkedInUrl, phoneNumber, salary, esqueme}) => (
                                <div className={`${styles.inputs}`}>
                                <input className={styles.inputInfo} type="text" name="email" id="email" value={email + ''} onChange={(e) => onChangeInput(e)} />
                                <input className={styles.inputInfo} type="text" name="position" id="position" value={position + ''} onChange={(e) => onChangeInput(e)} />
                                <p className={styles.inputInfo}>{projectsAssigned + "ㅤ"}</p>
                                <input className={styles.inputInfo} type="text" name="cell" id="cell" value={cell + ''} onChange={(e) => onChangeInput(e)} />
                                <input className={styles.inputInfo} type="text" name="manager" id="manager" value={manager + ''} onChange={(e) => onChangeInput(e)} />
                                <input className={styles.inputInfo} type="text" name="linkedInUrl" id="linkedInUrl" value={linkedInUrl + ''} onChange={(e) => onChangeInput(e)} />
                                <input className={styles.inputInfo} type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber + ''} onChange={(e) => onChangeInput(e)} />
                                <input className={styles.inputInfo} type="text" name="salary" id="salary" value={salary + ''} onChange={(e) => onChangeInput(e)} />
                                <input className={styles.inputInfo} type="text" name="esqueme" id="esqueme" value={esqueme + ''} onChange={(e) => onChangeInput(e)} />
                                </div>
                            ))}
                            </div>
                            ):(
                            <div>
                                {employeeData.map(({name, email, position, projectsAssigned, cell, manager, linkedInUrl, phoneNumber}) => (
                                <div className={`${styles.inputs}`}>
                                <p className={styles.inputInfo}>{email + "ㅤ"}</p>
                                <p className={styles.inputInfo}>{position + "ㅤ"}</p>
                                <p className={styles.inputInfo}>{projectsAssigned + "ㅤ"}</p>
                                <p className={styles.inputInfo}>{cell + "ㅤ"}</p>
                                <p className={styles.inputInfo}>{manager + "ㅤ"}</p>
                                <input className={styles.inputInfo} type="text" name="linkedInUrl" id="linkedInUrl" value={linkedInUrl + ''} onChange={(e) => onChangeInput(e)} />
                                <input className={styles.inputInfo} type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber + ''} onChange={(e) => onChangeInput(e)} />
                                </div>
                            ))}
                            </div>
                            )}
                            <div id="saveButton">
                            </div>
                        </form>
                    </div>
                </div>                
            </div>
        );
    }
//}
 export default ProfileUsr;