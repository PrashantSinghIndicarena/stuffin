import React from 'react';
import { useEffect } from 'react';
import RideLandingPageOne from './rideWithus/RideLandingPageOne';
import Navbar from './navbar/Navbar';
import RideLandingPageTwo from './rideWithus/RideLandingPageTwo';
import RideLandingPageThree from './rideWithus/RideLandingPageThree';
import RideLandingPageFour from './rideWithus/RideLandingPageFour';
import LandingPageFive from '../components/homePage/fifthLandingPage/LandingPageFive';
import ReusableComponents from './commonReusableComponents/ReusableComponents';

export default function RideWithUs() {

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
      <RideLandingPageOne />
      <br />
      <RideLandingPageTwo />
      <RideLandingPageThree />
      <RideLandingPageFour />
      <br />
      <br />
      <LandingPageFive />
      <ReusableComponents />
    </>
  )
}
