import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPageSix.css';
import foodDeliveryImg from './Food delivery to customer home.svg';
import readMoreBtn from './readMore.svg';

export default function LandingPageSix() {
    return (
        <div id="landing-page-six">
            <h1><span>About</span> us</h1>
            <div id='landing-page-six-container'>
                <div id='landing-page-six-left'>
                    <p>
                        Welcoming you to Stuffin, where we redefine the tiffin delivery experience in Patna! From the get-go, our platform connects you to a variety of local lunchbox providers, ensuring a warm, home-cooked meal is just a click away. We pride ourselves on timely delivery and top-quality mess service, aiming to bring delight to students and working professionals alike. Dive into the world of diverse, delicious, and dependable tiffin services with Stuffin
                    </p>
                    <Link to='/about'>
                        <button>

                            <span>Read More</span>
                            <img src={readMoreBtn} alt='/' />

                        </button>
                    </Link>

                </div>
                <div id='landing-page-six-right'>
                    <img src={foodDeliveryImg} alt='/' />
                </div>
            </div>
        </div>
    )
}
