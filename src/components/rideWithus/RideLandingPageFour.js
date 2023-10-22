import React from 'react';
import './RideLandingPageFour.css';
import image1 from './illustration_pick_location 1.svg';
import image2 from './illustration_delivery 1.svg';
import image3 from './illustration_order_food 1.svg';

export default function RideLandingPageFour() {
    return (
        <div id='ride-landing-page-four'>
            <h1>Become a part of an <span>awesome fleet</span></h1>
            <div id='ride-landing-page-four-conatiner'>
                <div>
                    <div id='seprate-container'>
                        <img src={image1} alt='/' />
                        <div>
                            <h5>100 +</h5>
                            <p>TIFFIN<br />CENTERS</p>
                        </div>
                    </div>
                    <div id='seprate-container'>
                        <img src={image2} alt='/' />
                        <div>
                            <h5>50 +</h5>
                            <p>DELIVERY<br />PARTNERS</p>
                        </div>
                    </div>
                </div>
                
                <div id='seprate-container'>
                    <img src={image3} alt='/' />
                    <div>
                        <h5>1000 +</h5>
                        <p>STUFFIN<br />USERS</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
