import React, { useEffect } from 'react';
//import { useLocation } from 'react-router-dom';
import LandingPageOne from '../components/homePage/firstLandingPage/LandingPageOne';
import LandingPageTwo from '../components/homePage/secondLandingPage/LandingPageTwo';
import LandingPageFive from '../components/homePage/fifthLandingPage/LandingPageFive.js';
import LandingPageSix from '../components/homePage/sixthLandingPage/LandingPageSix.js';
import ReusableComponents from './commonReusableComponents/ReusableComponents';
import Navbar from '../components/navbar/Navbar';

const faqItemsHomePage = [
  {
    question: "How can I subscribe to Stuffin’s tiffin delivery service?",
    answer:
      "Subscribing to our service is easy! Simply visit our website, explore the variety of meal options from local providers, and choose the subscription that suits your needs. Follow the prompts to complete your order, and enjoy fresh home-cooked meals delivered to your doorstep!",
  },
  {
    question: "Can I customize my meal preferences and dietary restrictions?",
    answer:
      "Absolutely! We understand the importance of catering to individual preferences and dietary needs. During the subscription process, you'll have the option to specify your meal preferences and any restrictions to ensure you receive meals that are just right for you.",
  },
  {
    question: "What measures does Stuffin take to ensure the quality of meals?",
    answer:
      "Quality is our top priority! We collaborate with reputable local tiffin providers who are committed to maintaining high standards of hygiene and quality. Each meal is prepared with fresh ingredients to ensure you receive nutritious and delicious home-cooked food.",
  },
  {
    question: "How does Stuffin ensure timely delivery of meals?",
    answer:
      "We value your time! Our efficient delivery system and dedicated team work diligently to ensure that your tiffin is delivered promptly, allowing you to enjoy your meals hot and fresh, every time.",
  },
  {
    question: "Can I pause or cancel my subscription if I am not available?",
    answer:
      "Certainly! We offer flexible subscription options. If you need to pause or cancel your subscription, simply log in to your account on our website and make the necessary adjustments. We’re here to accommodate your schedule and dining needs.",
  },
];
function HomePage() {
    
  //const location = useLocation();

  useEffect(() => {
    let passedValue = localStorage.getItem('myData');
    localStorage.setItem('CurrentFAQ', JSON.stringify(faqItemsHomePage));
    if(passedValue != "true"){
        window.location.reload();
        localStorage.setItem('myData', "true");
    }
    
    // 👇️ scroll to top on page load
  }, []);
  return (
    <>
      <Navbar />
      <LandingPageOne />
      <LandingPageTwo />
      <LandingPageFive />
      <LandingPageSix />
      <ReusableComponents />
      {console.log(window.scrollY)}

    </>
  );
  useEffect(() => {
    // Scroll to the top smoothly whenever the route changes
    scrollToTop();
  }, []);
}
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // To enable smooth scrolling
    });
 
 }
export default HomePage;
