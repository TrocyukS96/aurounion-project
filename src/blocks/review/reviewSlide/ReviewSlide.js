import React from 'react';
import TitleCard from './../../../components/titleCard/TitleCard';
import reviewImg from './../../../assets/images/review/3dkopter.png';
import ReviewFeature from '../reviewFeature/ReviewFeature';
import s from './ReviewSlide.module.scss';



function ReviewSLide() {
   return (
      <div className={s.review}>
         <div className={s.container}>
            <div className={s.wrap}>
               <div className={s.content}>
                  <h2 className={s.title}> Robinson R44</h2>
                  <p className={s.text}>Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения и уточнения дальнейших направлений развития.</p>
                  <div className={s.buttons}>
                     <button className={s.contentBtn}>Подробнее</button>
                     <button className={s.contentBtn}>Конфигуратор</button>
                  </div>
               </div>
               <div className={s.imageBlock}>
                  <img src={reviewImg} alt="3d kopter image" />
                  <button className={s.reviewBtn}>+</button>
                  <button className={s.reviewBtn}>+</button>
                  <button className={s.reviewBtn}>+</button>
                  <div className={s.circules}></div>
               </div>
               <div className={s.features}>
                  <ReviewFeature numb="287" text="км/ч" />
                  <ReviewFeature numb="6" text="человек" />
                  <ReviewFeature numb="870" text="литров" />
                  <ReviewFeature numb="5" text="часовs." />
               </div>
            </div>
         </div>
      </div>


   );
}

export default ReviewSLide;