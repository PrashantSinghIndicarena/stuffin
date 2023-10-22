import React from 'react';
import './LandingPageThree.css';
import useImg from '../../../../src/food-img.jpg';


export default function LandingPageThree() {
    return (
        <div id='landing-page-three'>
             <button><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                     <path d="M27 36L15 24L27 12" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
             </button>
             <div id='landing-page-three-image'>
                 <img src={useImg} alt='/' className='first-img' /> 
                 <img src={useImg} alt='/' className='second-img'/> 
             </div>
             <button><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M21 36L33 24L21 12" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                 </svg>
             </button>
        </div>
    )
}
