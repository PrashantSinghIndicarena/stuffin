import React from 'react';
import './LandingPageEight.css';
import mobileImg from './Group 18268.svg';
import playStore from '../../../assets/GooglPlay.svg';

export default function LandingPageNine() {
  return (
    <div id='landing-page-eight'>
      <div id='page-eight-left-sec'>
        <img src ={mobileImg} alt='#' id="complicated-style" />
      </div>
      
      <div id='page-eight-right-sec'>
        <h1>Get Meals at Your Fingertips!</h1>
        <p>Dive into a world where delicious, home-cooked meals are just a tap away! Download the Stuffin App now and embark on a culinary journey that promises variety, quality, and a dash of home in every bite.</p>
        <div id = "download-source">
            <img src ={playStore} alt='#' />
        </div>
        
        
      </div>
    </div>
  )
}

