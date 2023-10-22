import React from 'react';
import './AboutUsFirstLandingPage.css';
import aboutImg2 from './Illustraion.svg';
import aboutImg3 from './Frame 1203.svg';
import aboutImg4 from './Frame 1209.svg';
import teamImg1 from './Nitesh 1.png';
import teamImg2 from './chetan 1.png';
import teamImg3 from './Amit 1.png';
import twwiterIcon from './Frame 1183.svg';
import linkedinIcon from './Frame 1185.svg';
import heroIMG from '../../assets/Frame 1174.svg';
import downArrow from './down-arrow.svg';

export default function AboutUsFirstLandingPage() {

    function scrollToAboutSection() {
        const aboutSection = document.getElementById("about-landing-page-first-container");

        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
            });
        }
    }

    return (
        <div id='about-landing-page'>
            <div id='about-landing-page-hero-container'>
                <div id='left-hero'>
                    <h1> <span>About</span> us</h1>
                    <p>Welcoming you to Stuffin, where we redefine the tiffin delivery experience in Patna! From the get-go, our platform connects you to a variety of local lunchbox providers, ensuring a warm, home-cooked meal is just a click away. We pride ourselves on timely delivery and top-quality mess service, aiming to bring delight to students and working professionals alike. Dive into the world of diverse, delicious, and dependable tiffin services with Stuffin!</p>
                    <button id='read-more-aboutHero' onClick={scrollToAboutSection}>
                        <span>Read more</span>
                        <img src={downArrow} alt='/' />
                    </button>
                </div>
                <div id='right-hero'>
                    <img src={heroIMG} alt='/' />
                </div>
            </div>
            <br /><br /><br />
            <div id='about-landing-page-first-container'>
                <img src={aboutImg2} alt='/' />
                <div>
                    <h1>The <span>Story</span></h1>
                    <h4>Uniting Communities Through the Joy of Home-Cooked Meals</h4>
                    <p>In the bustling lanes of Patna, a culinary dream was simmering - Stuffin, a platform where the warmth of home-cooked meals meets the convenience of modern living. Born out of a passion for authentic flavours and a vision to empower local tiffin providers, Stuffin embarked on a mission to bring communities closer, one lunchbox at a time.</p>
                    <p>Our journey began with the simple idea of making wholesome, home-cooked meals accessible to students and working professionals. We collaborated with local culinary talents, creating a symphony of diverse flavours and traditions. With every tiffin delivered, we witnessed the joy of shared meals and the strengthening of community bonds.</p>
                </div>
            </div>
            <br />

            <div id='about-landing-page-second-container'>
                <div id="the-mission">
                    <h1>The <span>Mission</span></h1>
                    <p>At Stuffin, our mission is threefold:</p>
                    <ul>
                        <li>Cultivate Culinary Connections:We strive to create a platform where local tiffin providers and consumers come together, fostering a community that appreciates and celebrates the diversity of home-cooked meals. By uniting culinary talents and food enthusiasts, we aim to cultivate connections and share the joy of dining.</li>
                        <li> Deliver Delightful Dining Experiences:Our goal is to ensure that every meal is a delightful experience for our subscribers. By prioritising quality, variety, and timely delivery, we are committed to bringing fresh, nutritious, and flavorful meals to the doorsteps of students and working professionals in Patna.</li>
                        <li>Empower Local Entrepreneurs:We are dedicated to empowering local tiffin providers by offering them a platform to grow their business and reach a wider audience. By supporting their endeavours, we contribute to the local economy and help in nurturing the culinary landscape of the region</li>
                    </ul>
                    <h4>Through these endeavours, Stuffin aspires to be more than just a tiffin delivery service. We aim to be a catalyst for community building, a supporter of local enterprise, and a purveyor of delightful dining experiences. Join us as we embark on a mission to bring people closer, one meal at a time.</h4>
                </div>
                <div id="the-mission-img">
                    <img src={aboutImg3} alt='/' />
                    <h5>Through these endeavours, Stuffin aspires to be more than just a tiffin delivery service. We aim to be a catalyst for community building, a supporter of local enterprise, and a purveyor of delightful dining experiences. Join us as we embark on a mission to bring people closer, one meal at a time.</h5>
                </div>

            </div>

            <br />

            <div id='about-landing-page-second2-container'>
                <div id="the-vission">
                    <img src={aboutImg4} alt='/' />
                    <h4>With these visions in mind, Stuffin is on a journey to transform the way people experience meals, cultivate connections, and savour the simplicity and warmth of home-cooked food. Join us as we craft a future where every bite is a taste of home, and every meal is a moment to cherish.</h4>
                </div>

                <div id='the-vission-img'>
                    <h1>Our <span>Vision</span></h1>
                    <p>At Stuffin, we envision a future where:</p>
                    <ul>
                        <li> Community and Cuisine Coalesce:We aspire to build a vibrant community where the love for home-cooked meals transcends boundaries, bringing people together in a celebration of culinary diversity and shared experiences.</li>
                        <li> Quality Meets Convenience:We aim to set a benchmark in the tiffin delivery industry by seamlessly blending the authenticity of home-cooked cuisine with the convenience of modern living, ensuring every subscriber enjoys a delightful and hassle-free dining experience.</li>
                        <li>Local Talent Flourishes:We seek to create a thriving ecosystem where local tiffin providers are recognized, valued, and empowered to expand their horizons, fostering entrepreneurship and contributing to the culinary richness of Patna. Sustainability is Savoured:We are committed to adopting sustainable practices, minimising our environmental footprint, and encouraging mindful consumption, ensuring that every meal is a step towards a healthier planet.</li>
                    </ul>
                    <h5>With these visions in mind, Stuffin is on a journey to transform the way people experience meals, cultivate connections, and savour the simplicity and warmth of home-cooked food. Join us as we craft a future where every bite is a taste of home, and every meal is a moment to cherish.</h5>
                </div>
            </div>
            <br />
            <br />

            <h1 id='about-landing-page-third-heading'>Our <span>Team</span></h1>
            <div id='about-landing-page-third-container'>
                <div id='team-info'>
                    <img src={teamImg1} alt='/' />
                    <div >
                        <p>Nitesh Kumar</p>
                        <div id='icon-img'>
                            <a href='https://x.com/stuffin_in?t=9jacXPY50FoFelxfKg-L7w&s=08' target='_blank'>
                                <img src={twwiterIcon} alt='/' />
                            </a>
                            <a href='https://www.linkedin.com/company/stuffindia/' target='_blank'>
                                <img src={linkedinIcon} alt='/' />
                            </a>
                        </div>
                    </div>
                    <span>Founder</span>
                </div>
                <div id='team-info'>
                    <img src={teamImg3} alt='/' />
                    <div >
                        <p>Amit Kumar</p>
                        <div id='icon-img'>
                            <a href='https://x.com/stuffin_in?t=9jacXPY50FoFelxfKg-L7w&s=08' target='_blank'>
                                <img src={twwiterIcon} alt='/' />
                            </a>
                            <a href='https://www.linkedin.com/company/stuffindia/' target='_blank'>
                                <img src={linkedinIcon} alt='/' />
                            </a>
                        </div>
                    </div>
                    <span>Co-Founder</span>
                </div>
                <div id='team-info'>
                    <img src={teamImg2} alt='/' />
                    <div >
                        <p>Chetan Sharma</p>
                        <div id='icon-img'>
                            <a href='https://x.com/stuffin_in?t=9jacXPY50FoFelxfKg-L7w&s=08' target='_blank'>
                                <img src={twwiterIcon} alt='/' />
                            </a>
                            <a href='https://www.linkedin.com/company/stuffindia/' target='_blank'>
                                <img src={linkedinIcon} alt='/' />
                            </a>
                        </div>
                    </div>
                    <span>Co-Founder</span>
                </div>
            </div>


        </div>
    )
}
