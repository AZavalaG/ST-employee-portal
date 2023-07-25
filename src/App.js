import React from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const App = () => {

  return (
    <>
      <Helmet>
        <title>Welcome! | Employee Portal</title>
      </Helmet>
      <div className="app">
        <Outlet />
      </div>
    </>
  );
};

export default App;
