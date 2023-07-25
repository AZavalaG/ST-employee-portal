import React, {useState} from 'react';
import styles from './requestEntry.module.css';


import ActionPanel from '../../Components/ActionPanel';
import Navbar from '../../Components/Navbar';
import ModalComponent from '../../Components/ModalComponent';

const RequestEntry = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // POST de la data
        setIsOpen(true);
    }

    return ( 
        <div className="layoutContainer">
            <Navbar />
            <ActionPanel />
            {isOpen && <ModalComponent redirectUrl="/time" title="Request Sent!" setIsOpen={setIsOpen}></ModalComponent>}
            <main className="mainContainer">
                <div className={styles.requestEntryPage}>
                    <main className={styles.requestEntryPageMain}>
                        <h1 className='app-title'>Request Days Off</h1>
                        <p>Fill the following form to request Days Off</p>
                        <div className={styles.requestFormContainer}>
                            <form onSubmit={handleSubmit} className={styles.requestForm}>
                                <div className={styles.topInputs}>
                                    <div className={styles.topInput}>
                                        <label>Initial Day:</label>
                                        <input type='date' name='initialDate' />
                                    </div>
                                    <div className={styles.topInput}>
                                        <label>End Day:</label>
                                        <input type='date' name='endDate' />
                                    </div>
                                    <div className={styles.topSelect}>
                                        <label>Type:</label>
                                        <select name='requestType' id='requestType'>
                                            <option value='holiday'>Holidays</option>
                                            <option value='sickDay'>Sick Days</option>
                                            <option value='other'>Other Type</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={styles.textArea}>
                                    <label>Comments:</label>
                                    <textarea name='comments' placeholder='Comments in here...' />
                                </div>
                                <div className={styles.fileAttach}>
                                    <label>Attachements:</label>
                                    <input type='file' name='fileAttachment' />
                                </div>
                                <input type='submit' className={styles.submitBtn} value='Send Request' />
                            </form>
                        </div>
                    </main>
                </div>
            </main>
        </div>
     );
}
 
export default RequestEntry;