import React from 'react';
import Navbar from './navbar/Navbar';
import {useEffect} from "react";
import AboutUsFirstLandingPage from './aboutUs/AboutUsFirstLandingPage';
import LandingPageEight from '../components/homePage/eighthLandingPage/LandingPageEight';
import LandingPageNine from '../components/homePage/ninthLangingPage/LandingPageNine';
import ScrollToTop from './ScrollToTop';

export default function AboutUsPage() {

  useEffect(() => {
    let passedValue = localStorage.getItem('myData');
    if(passedValue != "true"){
        window.location.reload();
        localStorage.setItem('myData', "true");
    }
    
    // 👇️ scroll to top on page load
  }, []);
  return (
    <>
      <Navbar />
      <br />
      <br />
      {/* <br />
      <br /> */}
      {/* <LandingPageSix /> */}
      <AboutUsFirstLandingPage />
      <LandingPageEight />
      <LandingPageNine />
      {/* <ScrollToTop></ScrollToTop> */}

    </>
  )
}
