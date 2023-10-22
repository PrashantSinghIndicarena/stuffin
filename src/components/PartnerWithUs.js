import React from 'react';
import { useEffect } from 'react';
import PartnerlandingPageOne from '../components/partnerWithUs/PartnerlandingPageOne';
import Navbar from '../components/navbar/Navbar';
import PartnerLandingPageTwo from './partnerWithUs/PartnerLandingPageTwo';
import PartnerLandingPageThree from './partnerWithUs/PartnerLandingPageThree';
import PartnerLandingPageFour from './partnerWithUs/PartnerLandingPageFour';
import LandingPageFive from '../components/homePage/fifthLandingPage/LandingPageFive';
import AdLandingPageTwo from '../components/advertiesWithUs/adLandingPageTwo/AdLandingPageTwo';
import ReusableComponents from './commonReusableComponents/ReusableComponents';

export default function PartnerWithUs() {

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
      <PartnerlandingPageOne/>
      <PartnerLandingPageTwo />
      <PartnerLandingPageThree />
      <PartnerLandingPageFour />
      <LandingPageFive />
      <AdLandingPageTwo />
      <ReusableComponents />
    </>
  )
}
