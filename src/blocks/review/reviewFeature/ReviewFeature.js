import React from 'react';
import s from './ReviewFeatures.module.scss';



function ReviewFeature(props) {
   return (
      <div className={s.feature}>
         <p className={s.numb}>{props.numb}</p>
         <p className={s.text}>{props.text}</p>
      </div>


   );
}

export default ReviewFeature;