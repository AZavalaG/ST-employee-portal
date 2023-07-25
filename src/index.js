import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Static Screens
import App from './App';
import LoginPage from './Screens/LoginPage';
import HomePage from './Screens/HomePage';
import PeoplePage from './Screens/PeoplePage';
import TimeManagement from './Screens/TimeManagement';
import TimeEntry from './Screens/TimeEntry';
import RequestEntry from './Screens/RequestEntry';
// Dinamic Screens
import ProfilePage from './Screens/ProfilePage';

import './Styles/app.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error Screen!</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/people",
        element: <PeoplePage />,
      },
      {
        path: "/time",
        element: <TimeManagement />,
      },
      {
        path: "/time/new-timecard",
        element: <TimeEntry />,
      },
      {
        path: "/time/new-request",
        element: <RequestEntry />,
      },
      {
        path: "users/:userId",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();