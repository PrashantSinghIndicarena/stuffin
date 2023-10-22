import React from 'react';
import './PartnerLandingPageThree.css';
import step1Img from './card item 1 (2).svg'
import step2Img from './card item 1.svg';
import step3Img from './card item 1 (1).svg';

export default function PartnerLandingPageThree() {
    return (
        <div id='partner-landing-page-three'>
            <h2>How it <span>works</span>?</h2>
            <div id='steps-container'>
                <div id='step'>
                    <img src={step1Img} alt='/' />
                    <span>Step 1</span>
                    <h6>Register on stuffin</h6>
                    <p>Help users discover your place by <br />creating a listing on Stuffin</p>
                </div>
                <div id='step'>
                    <img src={step2Img} alt='/' />
                    <span>Step 2</span>
                    <h6>Get your KYC done</h6>
                    <p>And deliver orders to millions of <br />customers with ease</p>
                </div>
                <div id='step'>
                    <img src={step3Img} alt='/' />
                    <span>Step 3</span>
                    <h6>Start receiving orders online</h6>
                    <p>Manage orders on our partner app, <br />web dashboard or API partners</p>
                </div>
            </div>
        </div>
    )
}
