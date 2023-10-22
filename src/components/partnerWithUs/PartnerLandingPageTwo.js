import React from 'react';
import './PartnerLandingPageTwo.css';
import supportImg from './fi_2706950.svg';
import supportImg1 from './fi_1830318.svg';
import supportImg2 from './fi_3107249.svg';
export default function PartnerLandingPageTwo() {
    return (
        <div id='partner-landing-page-two'>
            <h1>Why should you <span>partner</span> with Stuffin?</h1>
            <p>Stuffin enables you to get 60% more revenue, 10x new customers and boost your brand<br /> visibility by providing insights to improve your business.</p>
            <div id='stuffin-insights'>
                <div id='stuffin-support' >
                    <img src={supportImg} alt='/' />
                    <div id='stuffin-support-info'>
                        <h5>24 x 7 Support</h5>
                        <p>at Operating hours</p>
                    </div>
                </div>
                <div id='for-mobile-use'>
                    <div id='stuffin-support'>
                        <img src={supportImg1} alt='/' />
                        <div id='stuffin-support-info'>
                            <h5>100+ Support</h5>
                            <p>Tiffin Center Insights</p>
                        </div>
                    </div>
                    <div id='stuffin-support'>
                        <img src={supportImg2} alt='/' />
                        <div id='stuffin-support-info'>
                            <h5>100+ Support</h5>
                            <p>Monthly Orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
