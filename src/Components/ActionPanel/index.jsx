import React from 'react';

import AppHeader from './Components/appHeader';
import ActionInformation from './Components/actionInformation';
import SearchBox from './Components/searchBox';
import Footer from './Components/footer';

import styles from './action-panel.module.css';


const ActionPanel = ({children}) => {
  return ( 
    <div className={styles.actionPanelContainer}>
      <AppHeader appName="Employee Portal" />
      <ActionInformation name="Name Last Name" cell="Célula 1" />
      <SearchBox />
      <div className={styles.actionPanelContent}>
        {children}
      </div>
      <Footer />
    </div>
   );
}
 
export default ActionPanel;