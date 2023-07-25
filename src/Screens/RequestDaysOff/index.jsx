import {useState, useRef } from "react";
import PropTypes from 'prop-types';
import SelectList from "../../Components/Select";
import Button from "../../Components/Button";
import styles from "./requestDaysOff.module.css";
import FileIcon from "../../Assets/file.png";
import {supabase} from '../../supabaseClient';
import ModalWindow from "../../Components/Modal";


const RequestDaysOff = (props) => {
  const session = props.session;
  const formRequest = useRef(null);
  const [fileName, setFileName] = useState('');
  const [initialDate, setInitialDate] = useState(new Date().toISOString().substring(0, 10));
  const [endDate, setEndDate] = useState(new Date().toISOString().substring(0, 10));
  const [currentDate] = useState(new Date().toISOString().substring(0, 10));
  const [show, setShow] = useState(false);
  
  const types = {
    'Holidays' : '',
    'Sick Days': '',
    'Other': ''
  }

  
  const options = [{label: 'Holidays', value : 'Holidays'},
                    {label: 'Sick Days', value : 'Sick Days'},
                    {label: 'Other', value : 'Other'}]

    /**
     * 
     * @param {Date} initialDate 
     * @param {Date} endDate 
     * @returns the number of work hours
     */
    const getHrsLab =  (initialDate, endDate) => {
        let count = 0;
        for(let initDate = initialDate; initDate.getTime() <= endDate.getTime();  ){

            if(initDate.getDay() !== 0 && initDate.getDay() !== 6){
                count++;
            }
                
            initDate.setDate(initDate.getDate() + 1);    
        }
        return count * 8;
    }

   async function getTypeOfRequest(name, days){

        try{

            let { data, error: errorSB } = await supabase
                .from('Type')
                .select('Name,MaxDays,idType')
                .eq('Name', name)
                .lte('MaxDays', days);

            return {errorSB, 
                    idType: data.idType};
        
        }catch(error){
            return {errorCatch: error.message};
        }
    }

    async function getLastNumberRequest(userId){
        try{
            
        let { data, error: errorSB } = await supabase
            .from('Holiday Management')
            .select('NumRequest')
            .eq('idUser', userId);

        return{
            errorSB,
            numRequest: data.NumRequest
        }

        }catch(error){
            return {errorCatch: error.message};
        }
    }

    async function handleSubmit (event) {
       event.preventDefault();
       
       try{
        const {user} = session;
        const formData = new FormData(formRequest.current)
        const data = {
                initialDay: formData.get('initialDay'),
                endDay: formData.get('endDay'),
                typeRequest: formData.get('typeRequest'),
                comments: formData.get('comments'),
                file: formData.get('filesRequest')
        }

            let labHrs = getHrsLab(new Date(data.initialDay), new Date(data.endDay))

            console.log('Data: ', data);

            let typeReqRes = getTypeOfRequest(types[data.typeRequest], (labHrs/8));
            let numberRq = getLastNumberRequest(user.id);


            if(typeReqRes.errorCatch || typeReqRes.errorSB || numberRq.errorCatch || numberRq.errorSB){
                alert('An error ocurred');
            }else{
                
                const { error } = await supabase
                .from('Holiday Management')
                .insert([
                    { idUser: user.id, 
                        Comments: data.comments, 
                        Status: 'submitted', 
                        DateFrom: Date(initialDate),
                        DateTo: Date(data.endDay),
                        DateRequest: new Date(),
                        Hours: labHrs,
                        idType: typeReqRes.idType,
                        NumRequest: (numberRq+1)
                    },
                ])

               if(error){
                  alert('Error saving the time request');
                }else{
                    props.onsubmitted();
                    setShow(true);
                }
            }
    }catch(error){
        console.log('Error: '+error.message);
    }

    }

    const handleChangeFile = (event) => {
        const files = event.target.files;

        if(files && files.length > 0){
            const currentFile = files[0];
            setFileName(currentFile.name);
        }
    }

    const handleChangeInitialDate = (event) => {
        let newInitDay = event.target.value;

        if(newInitDay > endDate){
            alert('Initial date cannot be greater than end date');
        }else{
            setInitialDate(newInitDay);
        }

    }

    const handleChangeEndDate = (event) => {
        let newEndDate = event.target.value;

        if(newEndDate < initialDate){
            alert('End date cannot be before than the initial date');
        }else{
            setEndDate(newEndDate);
        }

    }

    return (
        <div>
            <p className={styles.titleMsg}>Fill the following form to request Days Off</p>
            <form ref={formRequest} id="RequestDaysForm" method="POST" encType="multipart/form-data" className={styles.stForm} onSubmit={handleSubmit}>
                <div className={styles.optionsContainer}>
                        <div className={styles.itemWrapper}>
                                <label htmlFor="initialDay" className={styles.inputLabelPr}><span className={styles.textRed}>* </span>Initial Day: </label>
                                <input id="initialDay" name="initialDay" type="date" className={styles.inputDate} value={initialDate} min={currentDate} onChange={handleChangeInitialDate} required/>
                        </div>
                        <div className={styles.itemWrapper}>
                                <label htmlFor="endDay" className={`${styles.inputLabelPl} ${styles.inputLabelPr}`}><span className={styles.textRed}>* </span>End Day: </label>
                                <input id="endDay" name="endDay" type="date" className={styles.inputDate} value={endDate} min={initialDate} onChange={handleChangeEndDate} required/>
                        </div>
                        <div className={styles.itemWrapper}>
                            <label htmlFor="typeRequest" className={`${styles.inputLabelPl} ${styles.inputLabelPr}`}>Type: </label>
                            <SelectList id="typeRequest" options={options} name="typeRequest"/>
                        </div>
                </div>
                <div className={styles.commentWrapper}>
                    <label htmlFor="comments" className={styles.commentLabel}><span className={styles.textRed}>* </span>Comments:</label>
                    <textarea id="comments" name="comments" placeholder="Comments in here ..." className={styles.inputTextArea} required></textarea>
                </div>
                <div className={styles.attachWrapper}>
                    <label className={styles.attachmentLabel}>Attachments:</label>
                    
                    <div>
                        <label htmlFor="filesRequest" className={styles.attachButton}>
                            Attach a file
                        </label>
                        <img className={styles.fileIcon} src={FileIcon} alt="file Icon"/>
                    </div>

                    <span className={styles.fileNameLabel}>{fileName}</span>
                    
                    <input id="filesRequest" name="filesRequest" type="file" className={styles.inputFiles} onChange={handleChangeFile} accept="image/png,image/jpeg,.pdf"/>
                </div>
                <div className={styles.submitWrapper}>
                    <span></span>
                     <span className={styles.buttonWrapper}>
                        <Button type="success" content="Sent to Approbal"/>
                     </span>
                    <span></span>
                </div>
            </form>

            <ModalWindow onClose={() => {
                setShow(false);
             }} show={show} title="Request Sent">
            </ModalWindow>
        </div>
    );
};

RequestDaysOff.propTypes = {
    session: PropTypes.object.isRequired,
    onsubmitted: PropTypes.func
}

export default RequestDaysOff;