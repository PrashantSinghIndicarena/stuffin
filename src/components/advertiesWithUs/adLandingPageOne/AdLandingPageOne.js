import React from 'react';
import './AdLandingPageOne.css';
import successImg from './Frame 40060.svg';
import arrowDown from './Frame 39922.svg';

export default function AdLandingPageOne() {
    return (
        <div id='add-landing-Page-one'>
            <div id='down-circle-arrow'>
                <img src={arrowDown} alt='/' />
            </div>
            <div id='add-landing-Page-one-left'>
                <h1>Elavate Your Tiffin Service With Stuffin</h1>
                <p>Adverties with Us and Expand Your<br /> Business Horizons</p>
            </div>

            <div id='add-landing-Page-one-right'>
                <img src={successImg} alt='success' />
            </div>

        </div>
    )
}
