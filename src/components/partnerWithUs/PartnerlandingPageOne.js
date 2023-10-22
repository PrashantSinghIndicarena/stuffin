import React from 'react';
import './PartnerlandingPageOne.css';
import phoneImg1 from './Frame 3 (2).svg';
import phoneImg2 from './Frame 3 (3).svg';
import frontCamera from './Pill.svg';

export default function PartnerlandingPageOne() {
  return (
    <div id='partner-landing-page-one'>
      <div id='partner-landing-page-one-left'>
        <h1>Partner with Stuffin at 0% for the first month</h1>
        <p>"Need assistance? Feel free to reach out to us at +91 8969745628. We're here to help!"</p>
        <div id='partner-landing-page-one-left-button'>
          <button id="first-btn">Resgiter your tiffen center</button>
          <button id="second-btn">Log in to your existing tiffen center</button>
        </div>
      </div>
      <div id='partner-landing-page-one-right'>
        <img src={phoneImg1} alt='/' />
        <img src={phoneImg2} alt='/' />
        <div id="front-camera">
          <img src={frontCamera} alt='/' />
        </div>
        <div id="front-camera-2">
          <img src={frontCamera} alt='/' />
        </div>
      </div>
      <div id='partner-hero-container'>
        <div id='partner-hero-image-container'>
          <img src={phoneImg1} alt='/' />
          <div id='partner-hero-subImage-container'>
            <img src={phoneImg2} alt='/' />
          </div>
        </div>
        <div id='partner-hero-text-container'>
          <h5>Partner with Stuffin<br />
            at 0% for the first month</h5>
          <p>"Need assistance? Feel free to reach out to us at +91 8969745628. We're here to help!"</p>
          <button id="mobile-view-first-btn">Resgiter your tiffen center</button>
          <button id="mobile-view-second-btn">Log in to your existing tiffen center</button>
        </div>
      </div>
    </div>
  )
}
