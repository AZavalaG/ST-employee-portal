import React from 'react';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import SkillGroup from  '../../Components/SkilllGroup';
import Button from '../../Components/Button';
import styles from './stylesManager.module.css';
import iconBack from '../../Assets/back-cta.png';

const SkillsRequestReview = (props) => {
    const { user } = props;
    const navigate = useNavigate();
    const { request_id } = useParams();
    const parsedRequestId = parseInt(request_id);
    const fetchResponse = '/api/team/request/:request_id';

    const [skillRequestReview, setSkillRequestReview] = useState([]);
    const [skillsGroup, setSkillsGroup] = useState([]);

    useEffect(() => {
        const fetchSkillRequests = async () => {
            const response = await fetch(fetchResponse);
            const data = await response.json();
            setSkillRequestReview(filterDataByRequestId(data, parsedRequestId));
            setSkillsGroup(filterDataByRequestId(data, parsedRequestId, false));
        };
        fetchSkillRequests();
    }, [parsedRequestId]);

    const formatElement = (format, fields) => {
        let element = '';
        switch(format){
            case 'fullname_last_first':
            if(!fields.hasOwnProperty('name') || !fields.hasOwnProperty('lastname')) return '';
            element = `${fields.lastname}, ${fields.name}`;
            break;
            case 'fullname_name_first':
            if(!fields.hasOwnProperty('name') || !fields.hasOwnProperty('lastname')) return '';
            element = `${fields.name} ${fields.lastname}`;
            break;
            case 'day_month':
            case 'day_month_year':
            case 'month_day':
            case 'year_month_day':
            case 'year_month':
            case 'month_year':
            case 'month':
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            let dateParam = fields.fecharequest;
            let dateRequested = new Date(dateParam);
            if(!(dateRequested instanceof Date && !isNaN(dateRequested))) return '';
            if(format ==='month') return months[dateRequested.getMonth()];
            let dateElements=[], formatSplit = format.split("_");
            formatSplit.forEach(element => {
                if(element === 'year') dateElements.push(dateRequested.getFullYear());
                if(element === 'month') dateElements.push(months[dateRequested.getMonth()]);
                if(element === 'day') dateElements.push(dateRequested.getDate());
            });
            element = dateElements.join(" / ");
            break;
            case 'status':
            element = `${fields.status}`;
            break;
            case 'id':
            element = `Request No. ${fields.idrequest}`;
            break;
            default:
            element =  (format === undefined || !fields.hasOwnProperty(format))  ? `` : fields[format];
            break;
        }
        return element;
    }

    const filterDataByRequestId = (data, RequestId, fetchFirst = true) => {
        return (fetchFirst) ?  data.find( obj => obj.idrequest === RequestId) : data.filter( obj => obj.idrequest === RequestId);
    }

    return (
        { ...user === 'Manager' && skillRequestReview ? (
                <> 
                    <button className={styles.iconBackClass} onClick={() => navigate(-1)}><img src={iconBack} width="46" height="45" alt='Back' /> </button>
                    <h1>Request No. {request_id}</h1>
                    <div className={styles.container}>
                        <div className={styles.topContainer}>
                            <div className={styles.rightText}>Month: { formatElement('month', skillRequestReview) } </div>
                            <div className={styles.leftText}>Status: 
                            <span className={ skillRequestReview.status === 'approved' ? styles.approved : skillRequestReview.status === 'pending' ? styles.pending : styles.rejected}> {skillRequestReview.status}</span></div> 
                        </div>
                        <div className={styles.bodyContainer}>
                            <div className={styles.sectionTitle}><h2>Changes</h2></div>
                            <div className={styles.sectionContent}>
                                <SkillGroup skills={skillsGroup} groupBy="categoria"></SkillGroup>
                            </div>
                        </div>
                        <div className={styles.footerContainer}>
                            <div className={styles.sectionTitle}><h2>Comments</h2></div>
                            <div className={styles.sectionContent}>
                                { skillRequestReview.comentariosreq ? skillRequestReview.comentariosreq : 'Manager Feedback will be here' } 
                            </div>
                        </div>
                        <div className={styles.buttonsFooter}>
                          <Button type="success" content="Success Button" />
                          <Button content="Cancel Button" />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <h2>You are not authorized to view this page or the request does not exist</h2>
                </>
            )
        }
    );

};

export default SkillsRequestReview;

SkillsRequestReview.propTypes = {
  user: PropTypes.string.isRequired,
};

SkillsRequestReview.defaultProps = {
  user: 'Manager',
}