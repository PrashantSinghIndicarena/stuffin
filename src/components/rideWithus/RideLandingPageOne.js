import React from 'react';
import './RideLandingPageOne.css';
import riderImg from './Frame 1088.svg';

export default function RideLandingPageOne() {
    return (
        <div id='ride-landing-page-one'>
            <div id='ride-landing-page-one-container'>
                <div id='ride-landing-page-one-left'>
                    <img src={riderImg} alt='/' />
                    <h5>Join one of india's Largest delivery platform </h5>
                </div>
                <div id='ride-landing-page-one-right'>
                    <div>
                        <h5>Join as Stuffin Partner</h5>
                        <h4>8969745628</h4>
                        <button>Contact us now</button>
                        <p>Allready have an account? <span>Sign in</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
