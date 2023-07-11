import styles from './requestDetails.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {supabase} from '../../supabaseClient';
import DownloadIcon from "../../Assets/download.png";

const RequestDetails = (props) => {

    async function getRequestDetails() {
        const { data, error } = await supabase
                                .from('HolidayManagement')
                                .select(`DateFrom, DateTo, pdfUrl, Name, Comments`);
    }

    useEffect(()=>{

        if(props?.idRequest){

        }

    }, []);

    return (
        <div className={styles.requestContainer}>
           <div className={styles.labelWrapper}>
                <p className={styles.fieldName}>Name </p>
                <p className={styles.fieldName}>Email </p>
                <p className={styles.fieldName}>Position </p>
                <p className={styles.fieldName}>Projects Assigned </p>
                <p className={styles.fieldName}>Cell </p>
                <p className={styles.fieldName}>Manager </p>
                <p className={styles.fieldName}>Start Date </p>
                <p className={styles.fieldName}>End Date </p>
                <p className={styles.fieldName}>Request Type</p>
                <p className={styles.fieldName}>Comments </p>
                <p className={styles.fieldName}>Attachment </p>
            </div>
            <div className={styles.valueWrapper}>
                <p className={styles.fieldValue}>Name Last Name</p>
                <p className={styles.fieldValue}>i.lastname@stgroup.mx</p>
                <p className={styles.fieldValue}>Technical Lead</p>
                <p className={styles.fieldValue}>Employee Portal</p>
                <p className={styles.fieldValue}>Salesforce Cell 3</p>
                <p className={styles.fieldValue}>Manager's Name</p>
                <p className={styles.fieldValue}>April/14/2023</p>
                <p className={styles.fieldValue}>April/14/2023</p>
                <p className={styles.fieldValue}>Sick Day</p>
                <p className={styles.fieldValue}>Any comments in here...</p>
                <div className={styles.linkWrapper}>
                    <p className={styles.fieldValue}>Receta.pdf</p>
                    <img className={styles.downloadIcon} src={DownloadIcon} alt="download icon"/>
                </div>
            </div>
        </div>
    );
};

RequestDetails.propTypes = {
    idRequest: PropTypes.string.isRequired,
    session: PropTypes.object.isRequired
}

export default RequestDetails;