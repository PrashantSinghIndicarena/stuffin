import React from 'react';
import './AdLandingPageThree.css';

export default function AdLandingPageThree() {
  return (
    <div id='ad-landing-page-three'>
        <div id='ad-landing-page-three-left'>
            <h1>Want to Know <span>More</span>?</h1>
            <p>Please leave your contact details here and we will get back to you within 24 hours</p>
        </div>
        <div id='ad-landing-page-three-right'>
            <p>Your contact details</p>
            <div id='input-box'>
                <input type='text' placeholder='Enter your city'></input>
                <input type='text' placeholder='Enter the name of your Tiffen Center'></input>
                <input type='text' placeholder='Enter your Full Name'></input>
                <input type='text' placeholder='Enter your Email ID'></input>
                <input type='text' placeholder='Enter your Phone Number'></input>
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}
