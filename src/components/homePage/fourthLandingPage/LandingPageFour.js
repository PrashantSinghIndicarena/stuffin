import React from 'react';
import './LandingPageFour.css';
import useImg from '../../../../src/food-img.jpg';
import starImg from '../../../assets/Frame 914.svg';

export default function LandingPageFour() {
  return (
    <div id='landing-page-four'>
      <h1>Our featured <span>Tiffen Providers</span></h1>
      <div id='landing-page-four-info-conatiner' >
        <div id='seprate-info-conatiner'>
          <img src={useImg} alt='/' />
          <div id='seprate-info-conatiner-text' >
            <h5>Hotel Saravana bavan ✅</h5>
            <img src ={starImg} alt = "/" />
          </div>
          <p>Address line 1 and area</p>
        </div>
        <div id='seprate-info-conatiner'>
          <img src={useImg} alt='/' />
          <div id='seprate-info-conatiner-text' >
            <h5>Hotel Saravana bavan ✅</h5>
            <img src ={starImg} alt = "/" />
          </div>
          <p>Address line 1 and area</p>
        </div>
        <div id='seprate-info-conatiner'>
          <img src={useImg} alt='/' />
          <div id='seprate-info-conatiner-text' >
            <h5>Hotel Saravana bavan ✅</h5>
            <img src ={starImg} alt = "/" />
          </div>
          <p>Address line 1 and area</p>
        </div>
      </div>
    </div>
  )
}
