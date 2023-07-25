import React from 'react';
import styles from './itemDetails.module.css';

const ItemDetails = (props) => {
    const { itemType } = props;
    // Usamos el id para hacer fetch a la DB

    const dummyUser = {
        name: "Name",
        lastName: "Last Name",
        email: "i.lastName@stgroup.mx",
        position: "Technical Lead",
        projects: "Employee Portal | Other Project",
        cell: "Salesforce Cell 3", 
        manager: "Manager´s Name"
    }

    const dummyData = {
        startDate : "April/14/2023",
        endDate: "April/15/2023",
        requestType: "Sick Day",
        comments: "Any comments in here...",
        file: "url of the file",
        user: dummyUser.name
    }

    const dummyTimecard = {
        startDate : "April/14/2023",
        weeks: [
            {title: "", }
        ]
    }

    if (itemType === 'request') {
        return (
            <div className={styles.requestDetailsContainer}>
                <div className={styles.requestLabel}>
                    <label>Name</label>
                    <span>{`${dummyUser.name} ${dummyUser.lastName}`}</span>
                </div>
                <div className={styles.requestLabel}>
                    <label>Email</label>
                    <span>{dummyUser.email} </span>
                </div>
                <div className={styles.requestLabel}>
                    <label>Position</label>
                    <span>{dummyUser.position} </span>
                </div>
                <div className={styles.requestLabel}>
                    <label>Projects Assigned</label>
                    <span>{dummyUser.projects} </span>
                </div>
                <div className={styles.requestLabel}>
                    <label>Cell</label>
                    <span>{dummyUser.cell} </span>
                </div>
                <div className={styles.requestLabel}>
                    <label>Manager</label>
                    <span>{dummyUser.manager} </span>
                </div>
                <div className={styles.requestLabel}>
                    <label>Start Date</label>
                    <span>{dummyData.startDate} </span>
                </div>
                <div className={styles.requestLabel}>
                    <label>End Date</label>
                    <span>{dummyData.endDate} </span>
                </div>
                <div className={styles.requestLabel}>
                    <label>Request Type</label>
                    <span>{dummyData.requestType} </span>
                </div>
                <div className={styles.requestLabel}>
                    <label>Comments</label>
                    <span>{dummyData.comments} </span>
                </div>
                <div className={styles.requestLabel}>
                    <label>Attachement</label>
                    <span>{dummyData.file} </span>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.timecardDetailsContainer}>
                <div className={styles.timecardDetailsInformationPannel}>
                    <h2>Name Last Name</h2>
                    <h2>Salesforce Cell 1</h2>
                    <h2>April 3-7 2023</h2>
                </div>
                <div className={styles.timecardDetailsTableContainer}>
                    <table>
                        
                    </table>
                </div>
            </div>
        )
  }
}
 
export default ItemDetails;