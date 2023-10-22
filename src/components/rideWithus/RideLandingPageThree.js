import React from 'react';
import{ Link } from 'react-router-dom';
import './RideLandingPageThree.css';
import rideImg from './Frame 1027.svg';
// import lineImg from './Vector 44.svg';



export default function RideLandingPageThree() {
    return (
        <div id='ride-landing-page-three'>
            <div id='ride-landing-page-three-container'>
                <div id='ride-landing-page-three-container-left'>
                    <img src={rideImg} alt='/' />
                </div>
                <div id='ride-landing-page-three-container-right'>
                    <h1>Get started in <span>4 easy steps</span></h1>
                    <div id='container-heading'>
                        <span>1</span>
                        <h6>Contact us</h6>
                    </div>
                    <div id='container-heading'>
                        <span>2</span>
                        <h6>Download Stuffin rider app from app store</h6>
                    </div>
                    <div id='container-heading'>
                        <span>3</span>
                        <h6>Fill in the details and documents</h6>
                    </div>
                    <div id='container-heading'>
                        <span>4</span>
                        <h6>Collect bag and t-shirt</h6>
                    </div>
                    <button>
                        <Link to="/contact">Get started</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
