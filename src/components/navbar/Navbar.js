import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import hamburgerBtn from './menu.svg';

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
  const faqItemsPartnerPage = [
    {
      question: "How can I advertise my tiffin service on Stuffin?",
      answer:
        "Subscribing to our service is easy! Simply visit our website, explore the variety of meal options from local providers, and choose the subscription that suits your needs. Follow the prompts to complete your order, and enjoy fresh home-cooked meals delivered to your doorstep!",
    },
    {
      question: " What is the cost of advertising on Stuffin?",
      answer:
        "Absolutely! We understand the importance of catering to individual preferences and dietary needs. During the subscription process, you'll have the option to specify your meal preferences and any restrictions to ensure you receive meals that are just right for you.",
    },
    {
      question: "How will advertising on Stuffin benefit my tiffin service business?",
      answer:
        "Quality is our top priority! We collaborate with reputable local tiffin providers who are committed to maintaining high standards of hygiene and quality. Each meal is prepared with fresh ingredients to ensure you receive nutritious and delicious home-cooked food.",
    },
    {
      question: "Can I track the performance of my advertisement on Stuffin?",
      answer:
        "We value your time! Our efficient delivery system and dedicated team work diligently to ensure that your tiffin is delivered promptly, allowing you to enjoy your meals hot and fresh, every time.",
    },
  ];

  const faqItemsRiderPage = [
    {
      question: "Hey you are my member to Stuffin’s tiffin delivery service?",
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

  ];
  const faqItemsBlogPage = [
  
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
  const faqContactPage = [
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
      question: "Can I pause or cancel my subscription if I am not available?",
      answer:
        "Certainly! We offer flexible subscription options. If you need to pause or cancel your subscription, simply log in to your account on our website and make the necessary adjustments. We’re here to accommodate your schedule and dining needs.",
    },
  ];
  const faqAboutUs = [
    {
      question: "How can I subscribe to Stuffin’s tiffin delivery service?",
      answer:
        "Subscribing to our service is easy! Simply visit our website, explore the variety of meal options from local providers, and choose the subscription that suits your needs. Follow the prompts to complete your order, and enjoy fresh home-cooked meals delivered to your doorstep!",
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
  const blogAdmin = [
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
const navElements = [

    { label: "Home", route: '', faqItem: faqItemsHomePage },
    { label: "Partner", route: "partner",faqItem: faqItemsPartnerPage },
    { label: "Rider", route: "rider", faqItem: faqItemsRiderPage},
    { label: "Blogs", route: "blogs", faqItem: faqItemsBlogPage },
    { label: "Contact Us", route: "contact", faqItem: faqContactPage },
    { label: "About Us", route: "about", faqItem: faqAboutUs },
    { label: "Blog Admin", route: "blogAdmin", faqItem: []} 
];

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };




    return (


        <div id='navbar'>
            <Link to="/" >
                <svg
                    viewBox="0 0 145 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.0731105 40.0012H144.955C144.96 40.0414 144.964 40.0816 144.97 40.1217C144.252 40.2035 143.535 40.2867 142.817 40.3685C142.817 40.3872 142.817 40.4044 142.818 40.423H144.309C144.31 40.456 144.311 40.489 144.313 40.5235C142.827 40.6842 141.341 40.8506 139.854 41.0041C136.224 41.3786 132.593 41.7516 128.962 42.1175C126.381 42.3772 123.798 42.6197 121.218 42.8822C118.112 43.1993 115.008 43.5393 111.902 43.8521C109.275 44.1161 106.645 44.3514 104.017 44.6054C101.184 44.878 98.3515 45.1735 95.5173 45.4275C93.0017 45.6542 90.4834 45.845 87.9651 46.0401C84.968 46.2711 81.9709 46.5036 78.9724 46.7087C77.0254 46.8422 75.0742 46.9426 73.1244 47.0359C69.1324 47.2281 65.1404 47.406 61.1484 47.5868C59.8871 47.6442 58.6245 47.7188 57.3619 47.7346C49.3407 47.8365 41.3194 47.9685 33.2981 47.9986C29.324 48.0129 25.3444 47.924 21.3758 47.7145C17.3438 47.5022 13.3159 47.1506 9.30043 46.7288C6.92702 46.4792 4.57707 45.977 2.43134 44.779C0.729938 43.8292 -0.2898 41.8004 0.0731105 40.0012Z"
                        fill="white"
                    />
                    <path
                        d="M114.353 30.2883C114.38 30.0112 114.622 29.8044 114.9 29.817C122.707 30.1694 127.299 30.158 135.111 29.8155C135.381 29.8036 135.62 29.9998 135.654 30.2684C135.964 32.6698 135.967 34.1965 135.648 36.6109C135.616 36.8562 135.412 37.0446 135.165 37.0618C127.383 37.6041 122.79 37.6371 114.831 37.0632C114.583 37.0453 114.378 36.8543 114.349 36.6074C114.06 34.2018 114.12 32.677 114.353 30.2883Z"
                        fill="white"
                    />
                    <path
                        d="M114.42 14.2112C114.44 13.9289 114.684 13.7142 114.967 13.7269C122.717 14.0766 127.286 14.0656 135.035 13.7265C135.32 13.714 135.565 13.9329 135.581 14.2178C135.724 16.764 135.737 18.2923 135.585 20.4555C135.567 20.7156 135.355 20.9211 135.095 20.9364C127.373 21.3899 122.799 21.4062 114.894 20.9356C114.642 20.9207 114.434 20.7269 114.407 20.4762C114.156 18.149 114.247 16.6146 114.42 14.2112Z"
                        fill="white"
                    />
                    <path
                        d="M113.624 18.9322C114.24 18.8346 114.615 18.8083 114.925 19.0572L115.9 20.0165C116.261 20.3714 116.069 20.9693 115.563 20.9658C115.076 20.9625 114.475 20.9096 113.608 20.7944C113.396 20.7663 113.209 20.6326 113.136 20.432C112.967 19.9673 112.977 19.6309 113.219 19.2012C113.303 19.0526 113.456 18.9589 113.624 18.9322Z"
                        fill="white"
                    />
                    <path
                        d="M136.371 18.9317C135.812 18.8416 135.454 18.8155 135.114 19.0274C135.084 19.0465 135.056 19.0701 135.03 19.0955L134.074 20.0364C133.717 20.3874 133.901 20.9741 134.402 20.9688C134.879 20.9637 135.487 20.9096 136.384 20.7935C136.597 20.766 136.785 20.632 136.858 20.4305C137.027 19.9662 137.016 19.6299 136.774 19.2002C136.691 19.0523 136.539 18.9587 136.371 18.9317Z"
                        fill="white"
                    />
                    <path
                        d="M114.384 6.74596C114.424 6.17392 114.895 5.72639 115.468 5.71203C122.199 5.54335 126.682 5.51823 134.526 5.71194C135.105 5.72623 135.579 6.18245 135.609 6.76064C135.715 8.81406 135.726 10.2131 135.619 11.974C135.585 12.53 135.135 12.9689 134.579 13.0007C127.325 13.4157 122.817 13.4296 115.386 12.999C114.849 12.9678 114.407 12.5551 114.358 12.0188C114.184 10.1156 114.247 8.70632 114.384 6.74596Z"
                        fill="white"
                    />
                    <path
                        d="M113.624 10.9666C114.24 10.869 114.615 10.8427 114.925 11.0916L115.9 12.051C116.261 12.4058 116.069 13.0037 115.563 13.0002C115.076 12.9969 114.475 12.944 113.608 12.8288C113.396 12.8008 113.209 12.667 113.136 12.4664C112.967 12.0017 112.977 11.6653 113.219 11.2356C113.303 11.087 113.456 10.9933 113.624 10.9666Z"
                        fill="white"
                    />
                    <path
                        d="M136.371 10.9661C135.812 10.876 135.454 10.8499 135.114 11.0618C135.084 11.081 135.056 11.1045 135.03 11.1299L134.074 12.0708C133.717 12.4218 133.901 13.0085 134.402 13.0032C134.879 12.9981 135.487 12.944 136.384 12.8279C136.597 12.8004 136.785 12.6664 136.858 12.4649C137.027 12.0006 137.016 11.6644 136.774 11.2347C136.691 11.0867 136.539 10.9931 136.371 10.9661Z"
                        fill="white"
                    />
                    <path
                        d="M114.42 22.177C114.44 21.8947 114.684 21.68 114.967 21.6928C122.717 22.0424 127.286 22.0314 135.035 21.6923C135.32 21.6798 135.565 21.8987 135.581 22.1836C135.724 24.7299 135.737 26.2581 135.585 28.4213C135.567 28.6814 135.355 28.887 135.095 28.9023C127.373 29.3557 122.799 29.3721 114.894 28.9015C114.642 28.8865 114.434 28.6927 114.407 28.4421C114.156 26.1148 114.247 24.5805 114.42 22.177Z"
                        fill="white"
                    />
                    <path
                        d="M113.624 26.8978C114.24 26.8001 114.615 26.7739 114.925 27.0228L115.9 27.9821C116.261 28.337 116.069 28.9349 115.563 28.9314C115.076 28.928 114.475 28.8751 113.608 28.76C113.396 28.7319 113.209 28.5981 113.136 28.3976C112.967 27.9328 112.977 27.5965 113.219 27.1668C113.303 27.0182 113.456 26.9245 113.624 26.8978Z"
                        fill="white"
                    />
                    <path
                        d="M113.943 35.0928C114.558 34.9952 114.933 34.969 115.244 35.2178L116.219 36.1772C116.58 36.5321 116.388 37.1299 115.882 37.1265C115.394 37.1231 114.794 37.0702 113.926 36.9551C113.714 36.927 113.527 36.7932 113.454 36.5926C113.285 36.1279 113.296 35.7915 113.537 35.3618C113.621 35.2133 113.774 35.1195 113.943 35.0928Z"
                        fill="white"
                    />
                    <path
                        d="M136.371 26.8973C135.812 26.8071 135.454 26.7811 135.114 26.9929C135.084 27.0121 135.056 27.0356 135.03 27.0611L134.074 28.002C133.717 28.3529 133.901 28.9397 134.402 28.9344C134.879 28.9293 135.487 28.8751 136.384 28.7591C136.597 28.7316 136.785 28.5976 136.858 28.3961C137.027 27.9318 137.016 27.5955 136.774 27.1658C136.691 27.0179 136.539 26.9243 136.371 26.8973Z"
                        fill="white"
                    />
                    <path
                        d="M136.271 35.0879C135.712 34.9978 135.355 34.9717 135.015 35.1836C134.984 35.2028 134.956 35.2263 134.93 35.2517L133.974 36.1927C133.617 36.5436 133.802 37.1303 134.302 37.125C134.78 37.12 135.388 37.0658 136.285 36.9498C136.497 36.9222 136.686 36.7882 136.759 36.5867C136.928 36.1225 136.917 35.7862 136.675 35.3565C136.591 35.2086 136.439 35.1149 136.271 35.0879Z"
                        fill="white"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M130.813 10.0367H119.023V3.82352C119.023 1.71184 120.735 0 122.847 0H126.989C129.101 0 130.813 1.71185 130.813 3.82352V10.0367ZM122.847 1.75245C121.703 1.75245 120.776 2.6797 120.776 3.82352V8.28429H129.06V3.82352C129.06 2.6797 128.133 1.75245 126.989 1.75245H122.847Z"
                        fill="white"
                    />
                    <g style={{ mixBlendMode: "darken" }}>
                        <rect
                            x="131.768"
                            y="5.57568"
                            width="2.54901"
                            height="31.8627"
                            fill="#D9D9D9"
                        />
                    </g>
                    <g style={{ mixBlendMode: "darken" }}>
                        <rect
                            x="130.812"
                            y="5.57568"
                            width="0.637253"
                            height="31.8627"
                            fill="#D9D9D9"
                        />
                    </g>
                    <g style={{ mixBlendMode: "darken" }}>
                        <rect
                            x="128.607"
                            y="5.65552"
                            width="0.318627"
                            height="31.8627"
                            fill="#D9D9D9"
                        />
                    </g>
                    <path
                        d="M13.8968 34.15C12.2948 34.15 10.7487 33.9544 9.25845 33.5632C7.78685 33.1534 6.58535 32.6318 5.65395 31.9985L7.47017 27.919C8.34568 28.4778 9.35159 28.9435 10.4879 29.316C11.6428 29.67 12.7884 29.8469 13.9247 29.8469C14.6885 29.8469 15.3032 29.7817 15.7689 29.6513C16.2346 29.5023 16.5699 29.316 16.7748 29.0925C16.9983 28.8503 17.1101 28.5709 17.1101 28.2543C17.1101 27.8072 16.9052 27.4533 16.4954 27.1925C16.0856 26.9317 15.5547 26.7175 14.9027 26.5498C14.2507 26.3822 13.5242 26.2145 12.7232 26.0468C11.9409 25.8792 11.1492 25.665 10.3482 25.4042C9.56581 25.1434 8.84863 24.8081 8.19666 24.3983C7.54468 23.9698 7.01379 23.4203 6.60398 22.7497C6.19416 22.0605 5.98926 21.1943 5.98926 20.1511C5.98926 18.9776 6.30593 17.9158 6.93928 16.9658C7.59125 16.0157 8.5599 15.252 9.84523 14.6745C11.1305 14.0971 12.7325 13.8083 14.6512 13.8083C15.9365 13.8083 17.1939 13.9574 18.4234 14.2554C19.6714 14.5348 20.7798 14.954 21.7484 15.5128L20.044 19.6202C19.1126 19.1173 18.1905 18.7447 17.2777 18.5026C16.365 18.2418 15.4802 18.1114 14.6233 18.1114C13.8595 18.1114 13.2448 18.1952 12.7791 18.3629C12.3134 18.5119 11.9781 18.7168 11.7732 18.9776C11.5683 19.2384 11.4659 19.5364 11.4659 19.8717C11.4659 20.3002 11.6614 20.6448 12.0526 20.9056C12.4624 21.1477 12.9933 21.3526 13.6453 21.5203C14.3159 21.6693 15.0424 21.8276 15.8248 21.9953C16.6258 22.1629 17.4175 22.3772 18.1998 22.6379C19.0008 22.8801 19.7273 23.2154 20.3793 23.6439C21.0313 24.0537 21.5528 24.6032 21.944 25.2924C22.3538 25.963 22.5587 26.8106 22.5587 27.8351C22.5587 28.9714 22.2328 30.0239 21.5808 30.9925C20.9474 31.9426 19.9881 32.7063 18.7028 33.2838C17.4361 33.8612 15.8341 34.15 13.8968 34.15ZM31.6248 34.0103C29.6875 34.0103 28.1786 33.5353 27.0982 32.5852C26.0178 31.6166 25.4776 30.1636 25.4776 28.2263V15.2334H30.7865V28.1704C30.7865 28.7106 30.9355 29.1391 31.2336 29.4558C31.5316 29.7538 31.9135 29.9028 32.3792 29.9028C33.0125 29.9028 33.5528 29.7445 33.9998 29.4278L35.3131 33.1441C34.866 33.4421 34.3165 33.6563 33.6645 33.7867C33.0125 33.9358 32.3326 34.0103 31.6248 34.0103ZM23.2702 23.1409V19.1732H34.2513V23.1409H23.2702ZM43.731 34.0103C42.5016 34.0103 41.3932 33.7681 40.4059 33.2838C39.4373 32.7995 38.6735 32.045 38.1147 31.0205C37.5745 29.9773 37.3044 28.6641 37.3044 27.0807V18.6143H42.6133V26.2145C42.6133 27.3881 42.8275 28.2263 43.256 28.7293C43.7031 29.2322 44.3271 29.4837 45.1281 29.4837C45.6497 29.4837 46.1247 29.3626 46.5531 29.1204C46.9816 28.8783 47.3262 28.4964 47.587 27.9748C47.8478 27.4346 47.9782 26.7454 47.9782 25.9071V18.6143H53.2871V33.7588H48.2296V29.4837L49.2076 30.6852C48.686 31.8029 47.9316 32.6411 46.9443 33.2C45.957 33.7402 44.8859 34.0103 43.731 34.0103ZM57.3214 33.7588V18.782C57.3214 16.9564 57.8616 15.5035 58.942 14.4231C60.0411 13.324 61.6058 12.7745 63.6363 12.7745C64.2882 12.7745 64.9309 12.8397 65.5642 12.9701C66.1976 13.1005 66.7285 13.2961 67.1569 13.5569L65.8437 17.3011C65.6201 17.1707 65.3687 17.0682 65.0892 16.9937C64.8098 16.9006 64.5304 16.854 64.251 16.854C63.6921 16.854 63.2544 17.0216 62.9377 17.3569C62.6397 17.6736 62.4906 18.1673 62.4906 18.8379V19.9276L62.6304 22.135V33.7588H57.3214ZM55.114 23.1409V19.1732H66.0951V23.1409H55.114ZM68.6728 33.7588V18.782C68.6728 16.9564 69.213 15.5035 70.2934 14.4231C71.3924 13.324 72.9572 12.7745 74.9876 12.7745C75.6396 12.7745 76.2823 12.8397 76.9156 12.9701C77.549 13.1005 78.0798 13.2961 78.5083 13.5569L77.195 17.3011C76.9715 17.1707 76.72 17.0682 76.4406 16.9937C76.1612 16.9006 75.8818 16.854 75.6023 16.854C75.0435 16.854 74.6057 17.0216 74.2891 17.3569C73.991 17.6736 73.842 18.1673 73.842 18.8379V19.9276L73.9817 22.135V33.7588H68.6728ZM66.4654 23.1409V19.1732H77.4465V23.1409H66.4654ZM79.8774 33.7588V18.6143H85.1864V33.7588H79.8774ZM82.5319 16.9378C81.5633 16.9378 80.7809 16.6677 80.1848 16.1275C79.5887 15.5873 79.2907 14.9167 79.2907 14.1157C79.2907 13.3147 79.5887 12.6441 80.1848 12.1039C80.7809 11.5637 81.5633 11.2936 82.5319 11.2936C83.5006 11.2936 84.2829 11.5544 84.879 12.0759C85.4751 12.5789 85.7732 13.2309 85.7732 14.0319C85.7732 14.8701 85.4751 15.5687 84.879 16.1275C84.3016 16.6677 83.5192 16.9378 82.5319 16.9378ZM98.4958 18.3629C99.6694 18.3629 100.731 18.605 101.681 19.0893C102.631 19.555 103.376 20.2815 103.917 21.2688C104.475 22.2561 104.755 23.5321 104.755 25.0968V33.7588H99.4459V25.963C99.4459 24.8826 99.2223 24.1002 98.7753 23.6159C98.3468 23.113 97.7414 22.8615 96.959 22.8615C96.4002 22.8615 95.8879 22.9919 95.4223 23.2527C94.9566 23.4948 94.5933 23.8767 94.3325 24.3983C94.0717 24.9199 93.9413 25.5998 93.9413 26.438V33.7588H88.6324V18.6143H93.6899V22.9174L92.7119 21.66C93.2894 20.5609 94.081 19.7413 95.0869 19.2011C96.0929 18.6423 97.2292 18.3629 98.4958 18.3629Z"
                        fill="white"
                    />
                </svg>
            </Link>

            <button className="hamburger-button" onClick={toggleMenu}>
                <img src={hamburgerBtn} alt='menu-btn' />
            </button>

            <div className={`nav-right-list ${showMenu ? "active" : ""}`}>
                {navElements.map(({ label, route, faqItem }) => (
                    <p key={label}>
                        <Link to={`/${route}`} onClick={() => {// Reload the current page
                            localStorage.setItem('myData', "false");
                            localStorage.setItem('CurrentFAQ', JSON.stringify(faqItem));
                            setShowMenu(false);
                        }}>
                            {label}
                        </Link>
                    </p>
                ))}
            </div>
            {/* //<ScrollToTop /> */}
        </div>

    );

}


