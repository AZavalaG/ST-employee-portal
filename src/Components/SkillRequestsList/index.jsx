import React from 'react';
import SkillRequestItem from '../SkillRequestItem';
import styles from './SkillRequestList.module.css';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const SkillRequestList = (props) => {
  const urlSkillItems = '/team/review/request/';
  const skillsRequests = props.items;

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
          element = fields.status;
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

  const renderSkills = (skillsRequests) => {
    let reqid=[];
    const skillsElements = skillsRequests.map((request, index) => {
        if(!reqid.includes(request.idrequest)){
          reqid.push(request.idrequest);
          return (
              <Link key={index} to={urlSkillItems + request.idrequest}>
                <SkillRequestItem key={request.idrequest}
                  request_id={request.idrequest}
                  element1={formatElement(props.element1, request)}
                  element2={formatElement(props.element2, request)}
                  element3={formatElement(props.element3, request)}
                  element4={formatElement(props.element4, request)}
                  statusRequest={request.status}
                  request_obj={request}
                />
              </Link>
          );
        } else {
          return '';
        }
    })
    return skillsElements
  }

  return (
    <div className={styles.container}>
      {
        renderSkills(skillsRequests)
      }
    </div>
  );
};

export default SkillRequestList;

SkillRequestList.propType = {
  element1: PropTypes.string,
  element2: PropTypes.string,
}

SkillRequestList.defaultProps = {
  element1: 'id',
  element2: 'name',
  element3: 'status',
  element4: ''
}