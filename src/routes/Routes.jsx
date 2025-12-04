import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import SkillDetails from '../pages/SkillDetails/SkillDetails';
import Login from './../pages/Login/Login';
import Signup from './../pages/Signup/Signup';
import Profile from '../pages/Profile/Profile';
import UpdateProfile from '../pages/Profile/UpdateProfile';
import PrivateRoute from './privateRoute';
import ForgetPassword from '../forgot/ForgetPassword';
import About from '../pages/About/About';
import Support from '../pages/Support/Support';
import AllItems from '../pages/AllItems/AllItems';
import Contact from '../pages/Contact/Contact';
import ErrorPage from '../pages/ErrorPage/ErrorPage';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true,
        Component: Home,
        loader: () => fetch('/skills.json'),
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'signup',
        Component: Signup
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        )
      },
      {
        path: 'update-profile',
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        )
      },
      {
        path: "/skill/:id",
        loader: () => fetch("/skills.json").then(res => res.json()),
        element: <SkillDetails />
      },
      {
        path: "/password-reset",
        Component: ForgetPassword
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/support",
        Component: Support
      },
      {
        path: "/all-items",
        Component: AllItems,
        loader: () => fetch('/skills.json')
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "*",
        Component: ErrorPage
      }
    ]
  },
]);

