import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import AdvertiesWithUs from './components/AdvertiesWithUs';
import PartnerWithUs from './components/PartnerWithUs';
import RideWithUs from './components/RideWithUs';
import AboutUsPage from './components/AboutUsPage';
import PolicyPageComponent from './components/PolicyPageComponent';
import BlogForm from './components/Blogform';
import BlogView from './components/blogPage/BlogView';
// import Singup from './components/signUpPage/Singup';
import BlogLogin from './components/blogPage/BlogLogin';
import BlogContent from './components/blogPage/BlogContent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/partner',
    element: <PartnerWithUs />,

  },

  {
    path: '/rider',
    element: <RideWithUs />
  },
  {
    path: "/about",
    element: <AboutUsPage />
  },
  {
    path: "/contact",
    element: <AboutUsPage />
  },

  {
    path: "/blogs",
    element: <BlogView />

  },
  {
    path: "/policy",
    element: <PolicyPageComponent /> 
  },

  {
    path: "/blogAdmin",
    element: <BlogLogin />
  },
  {
    path: "/blogAddPage",
    element: <BlogForm />
  },
  {
    path: "/blogview",
    element: <BlogContent />
  },

]);
//const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
{console.log(window.scrollY)}




