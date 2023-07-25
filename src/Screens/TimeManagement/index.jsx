import React, { useEffect, useState } from "react";
import styles from "./timeManagement.module.css";
import { Link } from "react-router-dom";
// import { createClient } from '@supabase/supabase-js';

import ActionPanel from '../../Components/ActionPanel';
import Navbar from '../../Components/Navbar';

import TimeItemList from "../../Components/TimeItemList";
import TimeSummary from "../../Components/TimeSummary";

// const supabase = createClient(process.env.REACT_APP_VITE_SUPABASE_URL, process.env.REACT_APP_VITE_SUPABASE_ANON_KEY);

const TimeManagement = (props) => {

  const timeCardsUser = [
    {"itemType":"timecard", "name":"Name", "lastname":"Last Name", "timeCardDate":"April 3-7 2023", "project":"Salesforce", "title":"APRIL 2023", "subtitle":"", "status":"Approved"},
    {"itemType":"timecard", "name":"Name", "lastname":"Last Name", "timeCardDate":"April 3-7 2023", "project":"Salesforce", "title":"APRIL 2023", "subtitle":"", "status":"Rejected"},
    {"itemType":"timecard", "name":"Name", "lastname":"Last Name", "timeCardDate":"April 3-7 2023", "project":"Salesforce", "title":"APRIL 2023", "subtitle":"", "status":"Approved"},
    {"itemType":"timecard", "name":"Name", "lastname":"Last Name", "timeCardDate":"April 3-7 2023", "project":"Salesforce", "title":"APRIL 2023", "subtitle":"", "status":"Rejected"},
    {"itemType":"timecard", "name":"Name", "lastname":"Last Name", "timeCardDate":"April 3-7 2023", "project":"Salesforce", "title":"APRIL 2023", "subtitle":"", "status":"Approved"}
  ]

  const requestCardsUser = [
    {"itemType":"request", "name":"Name", "lastname":"Last Name", "timeCardDate":"April 3-7 2023", "project":"Salesforce", "title":"APRIL 2023", "subtitle":"Sick Day", "status":"Approved"},
    {"itemType":"request", "name":"Name", "lastname":"Last Name", "timeCardDate":"April 3-7 2023", "project":"Salesforce", "title":"APRIL 2023", "subtitle":"Holiday", "status":"Approved"},
    {"itemType":"request", "name":"Name", "lastname":"Last Name", "timeCardDate":"April 3-7 2023", "project":"Salesforce", "title":"APRIL 2023", "subtitle":"Sick Day", "status":"Rejected"},
    {"itemType":"request", "name":"Name", "lastname":"Last Name", "timeCardDate":"April 3-7 2023", "project":"Salesforce", "title":"APRIL 2023", "subtitle":"PTO", "status":"Pending"},
    {"itemType":"request", "name":"Name", "lastname":"Last Name", "timeCardDate":"April 3-7 2023", "project":"Salesforce", "title":"APRIL 2023", "subtitle":"Sick Day", "status":"Pending"}
  ]

  return (
    <div className="layoutContainer">
      <Navbar />
      <ActionPanel>
        <Link className="app-item" to='/time/new-timecard'>Create Timecard</Link>
        <Link className="app-item" to='/time/new-request'>New Request</Link>
      </ActionPanel>
      <main className="mainContainer">
      <div className={styles.timeManagementContainer}>
        <h1>Time Management</h1>
        <TimeSummary />
        <div className={styles.timeManagementListsContainer}>
          <TimeItemList title="Timecards" itemsArray={timeCardsUser} />
          <TimeItemList title="Days Off Requests" itemsArray={requestCardsUser} />
        </div>
      </div>
      </main>
    </div>
  );
};

export default TimeManagement;

