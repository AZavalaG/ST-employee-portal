import React from 'react';

import AppHeader from './Components/appHeader';
import ActionInformation from './Components/actionInformation';
import SearchBox from './Components/searchBox';
import Footer from './Components/footer';

import styles from './action-panel.module.css';


const ActionPanel = (props) => {

  const sampleUser = {
    "id": "1213214123",
    "name" : "Name LastName"
  }
  

  return ( 
    <div className={styles.actionPanelContainer}>
      <AppHeader appName="Employee Portal" />
      <ActionInformation user={sampleUser} />
      <SearchBox />
      <div className={styles.actionPanelContent}>
        {props.children}
      </div>
      <Footer />
    </div>
   );
}
 
export default ActionPanel;