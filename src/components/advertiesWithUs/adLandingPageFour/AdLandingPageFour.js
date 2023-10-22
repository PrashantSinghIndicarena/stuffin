import React from 'react';
import './AdLandingPageFour.css';
import emailIcon from './fi_732200.svg';
import whtsapIcon from '.././../../assets/whatsappIcon.svg';
import phoneIcon from '.././../../assets/phnIcon.svg';
export default function AdLandingPageFour() {
  return (
    <div id='ad-landing-page-four'>
      <h1>Don't have patience?<span>Contacts us now.</span></h1>
      <p>Please leave your contact details here and we we'll get back to you within 24 hours</p>
      <div id='contact-details'>
        <img src={emailIcon} alt='/' />
        <p>info@stuffin.com</p>
        <img src={phoneIcon} alt='/' />
        <p>+91 89697 45628</p>
        <img src={whtsapIcon} alt='/' />
        <p>+91 89697 45628</p>
      </div>
      <div id='contact-details-phone-view'>
        <div id='phone-whatsapp-info'>
          <div id='phone-info'>
            <img src={phoneIcon} alt='phone-img' />
            <p>+91 89697 45628</p>
          </div>
          <div id='whatsapp-info'>
            <img src={whtsapIcon} alt='/' />
            <p>+91 89697 45628</p>
          </div>
        </div>
        <div id='email-info'>
          <img src={emailIcon} alt='/' />
          <p>info@stuffin.com</p>
        </div>
      </div>
    </div>
  )
}
