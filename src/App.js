//import React from "react";
import { Routes, Route } from 'react-router-dom';
import ProfileUser from './Components/ProfileUser/ProfileUser';
import Login from './Components/LoginForm';
import PersonalInformation from './Components/ActionPanel';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element= {<PersonalInformation/>}/>
      <Route path="/ProfileUser" element= {<ProfileUser/>}/>
    </Routes>
    </>
    /*<div>
      <h1>Employee Portal!</h1>
    </div>*/
  );
};

export default App;