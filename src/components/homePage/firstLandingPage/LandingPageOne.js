import React from 'react';
import './LandingPageOne.css';
import playStore from '../../../assets/GooglPlay.svg';
import mobileImg from './Frame 3.svg';
import logoImg from './Logo.svg';


export default function LandingPageOne() {
    return (
        <div id='landing-page-one'>
            <div id='landing-page-one-left'>
                <p id='heading'>Fresh Home<span id="dash">-</span>Cooked Meals<br />  Delivered in Patna | Stuffin Tiffin Service for Students &<br /> Professionals </p>
                <div id='image-sec'>
                    <img src={playStore} alt='/Playstore-link' id='playstore-img'/>
                    <img src={logoImg} alt='logo-img' id='logo-img'/>
                </div>
            </div>
            <div id='landing-page-one-right'>
                <img src={mobileImg} alt='Frame-img' />
            </div>

            <div id='mobile-view'>
               <div id='hero-section'>
                <img src ={logoImg} alt ='/' id='mobile-view-logo'/>
                <img src ={mobileImg} alt ='/' id='mobile-view-mobile'/>
               </div>
               <div id='hero-text'>
                  <p>Fresh Home-Cooked Meals Delivered in Patna</p>
                  <h2><span>Stuffin Tiffin</span> Service for <br />Students & Professionals</h2>
                  <img src = {playStore} alt='/' />
               </div>
            </div>

        </div>
    )
}