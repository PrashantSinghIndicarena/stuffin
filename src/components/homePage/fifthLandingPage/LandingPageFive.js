import React, { useState } from 'react';
import './LandingPageFive.css';
import customerImg from './Frame 917.svg';
import customerImg1 from './Frame 918.svg';
import starImg from '.././../../assets/Frame 914.svg';
import frontBtn from './chevron-left.svg';
import backBtn from './chevron-right.svg';

export default function LandingPageFive() {
  // Create state to manage the current review index
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Define an array of user reviews
  const userReviews = [
    {
      image: customerImg,
    },
    {
      image: customerImg1,
    },
    {
        image: customerImg,
      },
      {
        image: customerImg1,
      },

    // Add more reviews as needed
  ];

  // Event handler for moving to the next review
  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % userReviews.length);
  };

  // Event handler for moving to the previous review
  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? userReviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id='landing-page-five'>
      <h1>What <span>Our Users</span> Say !</h1>
      <div id='user-review-container'>
        <div id='user-review-separate-container'>
          <div id='review-back-btn' onClick={handlePrevReview}>
            <img src={backBtn} alt='Previous' />
          </div>
          <div id='user-review-info'>
            <img src={userReviews[currentReviewIndex].image} alt='User' />
            <p>{userReviews[currentReviewIndex].review}</p>
          </div>
        </div>

        <div id='user-review-separate-container'>
          <div id='user-review-info'>
            <img
              src={userReviews[(currentReviewIndex + 1) % userReviews.length].image}
              alt='User'
              className='hide-on-mobile'
            />
            <p>
              {userReviews[(currentReviewIndex + 1) % userReviews.length].review}
            </p>
          </div>
          <div id='review-forward-btn' onClick={handleNextReview}>
            <img src={frontBtn} alt='Next' />
          </div>
        </div>
      </div>
    </div>
  );
}





// import React from 'react';
// import './LandingPageFive.css';
// import customerImg from './Frame 917.svg';
// import customerImg1 from './Frame 918.svg';
// import starImg from '.././../../assets/Frame 914.svg';
// import frontBtn from './chevron-left.svg';
// import backBtn from './chevron-right.svg';

// export default function LandingPageFive() {
//     return (
//         <div id='landing-page-five'>
//             <h1>What <span>Our Users</span> Say !</h1>
//             <div id='user-review-container'>
//                 <div id='user-review-seprate-container'>
//                     <div id="review-back-btn">
//                         <img src={backBtn} alt='/' />
//                     </div>
//                     <div id='user-review-info'>
//                         <img src={customerImg} alt='/' />
//                     </div>
//                 </div>

//                 <div id='user-review-seprate-container' >
//                     <div id='user-review-info'>
//                         <img src={customerImg1} alt='/' className='hide-on-mobile' />
//                     </div>
//                     <div id="review-forward-btn">
//                         <img src={frontBtn} alt='/' />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
