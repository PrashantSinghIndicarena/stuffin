import React from 'react';
import './PartnerLandingPageFour.css';
import yesTickImg from './fi_711239.svg';

export default function PartnerLandingPageFour() {
    return (
        <div id='partner-landing-page-four'>
            <div id='ordering-container'>
                <h1>Get started with online ordering</h1>
                <p>Please Keep the documents ready for a smooth signup</p>
                <div id='singleline-ordering-container'>
                    <div id='seprate-order-container'>
                        <img src={yesTickImg} alt='/' />
                        <p>FSSAI license copy</p>
                    </div>
                    <div id='seprate-order-container'>
                        <img src={yesTickImg} alt='/' />
                        <p>PAN Card copy</p>
                    </div>
                </div>
                <div id='singleline-ordering-container'>
                    <div id='seprate-order-container'>
                        <img src={yesTickImg} alt='/' />
                        <p>Regular GSTIN (if applicable)</p>
                    </div>
                    <div id='seprate-order-container'>
                        <img src={yesTickImg} alt='/' />
                        <p>Bank account details</p>
                    </div>
                </div>
                <div id='singleline-ordering-container'>
                    <div id='seprate-order-container'>
                        <img src={yesTickImg} alt='/' />
                        <p>Your Tiffin menu</p>
                    </div>
                    <div id='seprate-order-container'>
                        <img src={yesTickImg} alt='/' />
                        <p>Food images for top 5 items</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
