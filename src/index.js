import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Getstarted from './Routes/Getstarted';
import Profile from './Routes/Profile';
import Signup from './Routes/Signup';
import Login from './Routes/Login';
import Dashboard from './Routes/Dashboard';
import AuthContext from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
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

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext>
    <RouterProvider router={router} />
  </AuthContext>
);


reportWebVitals();
