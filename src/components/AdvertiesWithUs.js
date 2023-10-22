import React from 'react';
import { useEffect } from 'react';
import AdLandingPageOne from "../components/advertiesWithUs/adLandingPageOne/AdLandingPageOne";
import AdLandingPageTwo from "../components/advertiesWithUs/adLandingPageTwo/AdLandingPageTwo";
import AdLandingPageThree from '../components/advertiesWithUs/adLandingPageThree/AdLandingPageThree.js';
import AdLandingPageFour from '../components/advertiesWithUs/adLandingPageFour/AdLandingPageFour.js';
import ReusableComponents from '../components/commonReusableComponents/ReusableComponents.js';
import Navbar from '../components/navbar/Navbar';

export default function AdvertiesWithUs() {

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
        <br/>
        <br/>
        <AdLandingPageOne />
        <AdLandingPageTwo />
        <AdLandingPageFour />
        <ReusableComponents />
    </>

  )
}
