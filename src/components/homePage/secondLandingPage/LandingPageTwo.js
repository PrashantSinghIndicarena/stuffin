import React from 'react';
import './LandingPageTwo.css';
import bikeImg from '../../../assets/bike2.svg';
import breakfastImg from '../../../assets/Breakfast-menu.svg';
import qualityGif from '../../../assets/quality.gif.svg';
export default function LandingPageTwo() {
    return (
        <div id='landing-page-two'>
            <div id='landing-page-two-left'>
                <div id='landing-page-two-leftside'>
                    <div id='our-prefrences'>
                        <img src={breakfastImg} alt='/' />
                        <h2>Easy to <span>Order</span></h2>
                        <p>Craving a meal? With a few clicks, your favourite tiffin is on its way! Experience the ease of ordering with Stuffin.</p>
                    </div>

                    <div id='our-prefrences'>
                        <img src={bikeImg} alt='/' />
                        <h2>Timely <span>Delivery</span></h2>
                        <p>Tick-tock, it’s meal o’clock! Rely on Stuffin for punctual tiffin delivery, making your dining routine seamless and enjoyable</p>
                    </div>
                </div>
                <div id='landing-page-two-left-rightside'>
                    <img src={qualityGif} alt='/' />
                    <h2>Best <span>Quality</span></h2>
                    <p>Indulge in the finest! Our lunch boxes are filled with top-notch, home-cooked goodness, ensuring every bite is a delight.</p>
                </div>
            </div>
            <div id='landing-page-two-right'>
                <h1>Your Tiffin <span>Delivery Partner</span></h1>
                <p>Discover the joy of fresh, home-cooked meals with Stuffin! Based in Patna, we deliver breakfast, lunch, and dinner right to your doorstep. Choose from a variety of local tiffin service providers and enjoy nutritious meals tailored for students and working professionals. Subscribe now for a hassle-free dining experience!</p>
            </div>

        </div>
    )
}
