import React from 'react';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import SkillRequestList from '../../Components/SkillRequestList';
import styles from './stylesManager.module.css';
import iconBack from '../../Assets/back-cta.png';
import { useNavigate } from 'react-router-dom'; /* Uncomment comented lines when enabling React Router */

const TeamSkillsRequests = (props) => {
  const { user } = props;
  const fetchResponse = '/api/team/requests';
  const [teamSkillsRequests, setTeamSkillsRequests] = useState([]);
  const navigate = useNavigate();

   useEffect(() => {
     const fetchTeamSkillsRequests = async () => {
       const response = await fetch(fetchResponse);
       const data = await response.json();
       setTeamSkillsRequests(data);
     };
     fetchTeamSkillsRequests();
     
   }, []);

  return (
      { ...user === 'Manager' && teamSkillsRequests ? (
          <> 
            <button className={styles.iconBackClass} onClick={() => navigate(-1)}><img src={iconBack} width="46" height="45" alt='Back' /> </button>
            <h1>My Team's Requests</h1>
            <h2>Requests</h2>
            {/* The SkillRequestList component accepts dynamic elements to be shown, either you provide the field name you want to show or the predefined. 
                You can add up to 4 elements to the component.
                e.g: <SkillRequestList items={teamSkillsRequests} element1='request_id' element2='month_day' element3='statusRequest' element4='request_id'  />
                If element 1 is left empty, it will show the request id.
                If element 3 is left empty, it will show the status of the request.

                If you want to work with dates you can select any of these options: 
            */}
            <SkillRequestList items={teamSkillsRequests} element2='nombre' />
          </>
        ) : (
          <>
            <h2>You are not authorized to view this page</h2>
          </>
        )
      }
  );

};

export default TeamSkillsRequests;

TeamSkillsRequests.propTypes = {
  user: PropTypes.string.isRequired,
};

TeamSkillsRequests.defaultProps = {
  user: 'Manager',
}