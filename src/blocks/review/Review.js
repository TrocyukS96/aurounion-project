import React from 'react';
import s from './Review.module.scss';
import TitleCard from '../../components/titleCard/TitleCard';
import ReviewSlider from './reviewSlider/ReviewSlider';


function Review() {
   return (
      <div className={s.review}>
         <div className={s.container}>
            <div className={s.wrap}>
               <ReviewSlider/>
            </div>
         </div>
      </div>


   );
}

export default Review;