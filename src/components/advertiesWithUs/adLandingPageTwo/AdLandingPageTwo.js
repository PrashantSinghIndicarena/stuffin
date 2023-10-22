import React from 'react';
import './AdLandingTwo.css';
import frame1 from '../../../assets/Frame 1056.svg';
import frame2 from '../../../assets/Frame 1056-1.svg';
import frame3 from '../../../assets/Frame 1056-2.svg';
import frame4 from '../../../assets/Frame 1056-3.svg';
import roundPhn from '../../../assets/Frame 996.svg';

export default function AdLandingPageTwo() {
    return (
        <div id='add-landing-page-two'>
            <div id='add-landing-page-two-left'>
                <div id='add-landing-page-two-left-heading'>
                    <h1>Why adverties on <span>stuffin</span>?</h1>
                    <p>Stuffin enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</p>
                </div>
                <div id='add-landing-page-two-left-points'>
                    <div id='icon'>
                        <img src={frame1} alt='/' />
                    </div>
                    <div id='description'>
                        <h2>Unleash Your Potential</h2>
                        <p>Unlock the door to a vast customer base of students and working professionals who value the authenticity of home-cooked meals, amplifying your reach and impact in the market.</p>
                    </div>
                </div>
                <div id='add-landing-page-two-left-points'>
                    <div id='icon'>
                    <img src={frame2} alt='/' />
                    </div>
                    <div id='description'>
                        <h2>Seamless Onboarding</h2>
                        <p>Experience a smooth and straightforward onboarding process, with a dedicated team at Stuffin ensuring that your tiffin service is showcased effectively and appealingly to our subscribers.</p>
                    </div>
                </div>
                <div id='add-landing-page-two-left-points'>
                    <div id='icon'>
                    <img src={frame3} alt='/' />
                    </div>
                    <div id='description'>
                        <h2>Boost Your Business</h2>
                        <p>Leverage the power of Stuffin’s platform to enhance your visibility, drive customer engagement, and boost your orders, propelling your tiffin service to new heights of success.</p>
                    </div>
                </div>
                <div id='add-landing-page-two-left-points'>
                    <div id='icon'>
                    <img src={frame4} alt='/' />
                    </div>
                    <div id='description'>
                        <h2>Be A Part Of A Culinary Community</h2>
                        <p>Join a vibrant community of culinary enthusiasts and tiffin service providers, fostering connections, sharing experiences, and contributing to a collective culinary journey that celebrates diversity and unity.</p>
                    </div>
                </div>
            </div>
            <div id='add-landing-page-two-right'>
               <img src={roundPhn} alt ="/" />
            </div>
        </div>
    )
}
