import React from 'react';
import PolicyPage from './policyPage/PolicyPage';
import Navbar from './navbar/Navbar';
import LandingPageNine from './homePage/ninthLangingPage/LandingPageNine';

export default function PolicyPageComponent() {
  return (
    <>
      <Navbar />
      <PolicyPage />
      <br />
      <br />
      <LandingPageNine />
    </>
  )
}
