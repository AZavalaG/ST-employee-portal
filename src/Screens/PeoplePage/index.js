import React from 'react';

import ActionPanel from '../../Components/ActionPanel';
import Navbar from '../../Components/Navbar';
import PersonCard from '../../Components/PersonCard';

import styles from './peoplePage.module.css';

const PeoplePage = (props) => {

    const peopleList = [
        {"id":"21232", "name":"Name LastName", "cell":"Cell 1", "position":"Manager", "project": "Salesforce", "country": "Mexico"},
        {"id":"21232", "name":"Name LastName", "cell":"Cell 1", "position":"Tech Lead", "project": "Salesforce", "country": "Mexico"},
        {"id":"21232", "name":"Name LastName", "cell":"Cell 1", "position":"Tech Lead", "project": "Salesforce", "country": "Mexico"},
        {"id":"21232", "name":"Name LastName", "cell":"Cell 1", "position":"Tech Lead", "project": "Salesforce", "country": "Mexico"},
        {"id":"21232", "name":"Name LastName", "cell":"Cell 1", "position":"Developer", "project": "Salesforce", "country": "Mexico"},
        {"id":"21232", "name":"Name LastName", "cell":"Cell 1", "position":"Developer", "project": "Salesforce", "country": "Mexico"},
        {"id":"21232", "name":"Name LastName", "cell":"Cell 1", "position":"Developer", "project": "Salesforce", "country": "Mexico"},
        {"id":"21232", "name":"Name LastName", "cell":"Cell 1", "position":"Developer", "project": "Salesforce", "country": "Mexico"},
        {"id":"21232", "name":"Name LastName", "cell":"Cell 1", "position":"Developer", "project": "Salesforce", "country": "Mexico"},
        {"id":"21232", "name":"Name LastName", "cell":"Cell 1", "position":"Developer", "project": "Salesforce", "country": "Mexico"},
        {"id":"21232", "name":"Name LastName", "cell":"Cell 1", "position":"Developer", "project": "Salesforce", "country": "Mexico"},
    ]

    return ( 
        <div className="layoutContainer">
            <Navbar />
            <ActionPanel />
            <main className="mainContainer">
                <div className={styles.peoplePage}>
                    <h1>My Cell</h1>
                    <div className={styles.cardList}>
                        {peopleList.map(person => {
                            return (
                                <PersonCard user={person} />
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
     );
}
 
export default PeoplePage;