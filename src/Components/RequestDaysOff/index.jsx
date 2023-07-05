import {useState} from "react";
import PropTypes from 'prop-types';
import SelectList from "../Select";
import Button from "../Button";
import styles from "./requestDaysOff.module.css";
import FileIcon from "../../Assets/file.png";


const RequestDaysOff = () => {
    
  const options = [{label: 'Holidays', value : 'Holidays'},
                    {label: 'Sick Days', value : 'Sick Days'},
                    {label: 'Other', value : 'Other'}]


    const myFunct = (event) => {
    console.log(event.target.value);
    }

    return (
        <div>
            <p className={styles.titleMsg}>Fill the following form to request Days Off</p>
            <form id="RequestDaysForm" action="#" method="POST" encType="multipart/form-data" className={styles.stForm}>
                <div className={styles.optionsContainer}>
                        <div className={styles.itemWrapper}>
                                <label htmlFor="initialDay" className={styles.inputLabelPr}><span className={styles.textRed}>* </span>Initial Day: </label>
                                <input id="initialDay" type="date" className={styles.inputDate} required/>
                        </div>
                        <div className={styles.itemWrapper}>
                                <label htmlFor="endDay" className={`${styles.inputLabelPl} ${styles.inputLabelPr}`}><span className={styles.textRed}>* </span>End Day: </label>
                                <input id="endDay" type="date" className={styles.inputDate} required/>
                        </div>
                        <div className={styles.itemWrapper}>
                            <label htmlFor="typeRequest" className={`${styles.inputLabelPl} ${styles.inputLabelPr}`}>Type: </label>
                            <SelectList id="typeRequest" options={options} name="Type" handleChange={myFunct}/>
                        </div>
                </div>
                <div className={styles.commentWrapper}>
                    <label htmlFor="comments" className={styles.commentLabel}><span className={styles.textRed}>* </span>Comments:</label>
                    <textarea id="comments" placeholder="Comments in here ..." className={styles.inputTextArea} required></textarea>
                </div>
                <div className={styles.attachWrapper}>
                    <label className={styles.attachmentLabel}>Attachments:</label>
                    
                    <div>
                        <label htmlFor="filesRequest" className={styles.attachButton}>
                            Attach a file
                        </label>
                        <img className={styles.fileIcon} src={FileIcon} alt="file Icon"/>
                    </div>
                    
                    <input id="filesRequest" type="file" className={styles.inputFiles}/>
                </div>
                <div className={styles.submitWrapper}>
                    <span></span>
                     <span className={styles.buttonWrapper}>
                        <Button type="success" content="Sent to Approbal"/>
                     </span>
                    <span></span>
                </div>
            </form>
        </div>
    );
};

export default RequestDaysOff;