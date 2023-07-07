import React from "react";
import TimeCardDetails from "./Components/TimeCardDetails";

const App = () => {

  return (
    <div>
      <h1>Employee Portal!</h1>
      <TimeCardDetails name="Alan" lastName="Poveda" timeCardDate="14/10/1995" practice="ServiceNow"/>
    </div>
  );
};

export default App;