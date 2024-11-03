import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Getstarted from './Routes/Getstarted';
import Profile from './Routes/Profile';
import Signup from './Routes/Signup';
import Login from './Routes/Login';
import Verify from './Routes/Verify';
import Dashboard from './Routes/Dashboard';
import AuthContext from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";

export const routes = [{
  path: "/",
  element: <Getstarted />,
},
{
  path: "/signup",
  element: <Signup />,
},
{
  path: "/login",
  element: <Login />,
},
{
  path: "/dashboard",
  element: <PrivateRoute><Dashboard /></PrivateRoute>
},
{
  path: "/profile",
  element: <PrivateRoute><Profile /></PrivateRoute>
},
{
  path: "/verify",
  element: <PrivateRoute><Verify /></PrivateRoute>
},
{
  path: "*",
  element: <>404</>
}]

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);


reportWebVitals();
