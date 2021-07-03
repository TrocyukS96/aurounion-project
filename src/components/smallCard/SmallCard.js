import React from 'react';
import s from './SmallCard.module.scss';
import Benefit from '../benefit/Benefit';

import speed from './../../assets/images/icons/speed-icon.png';
import passenger from './../../assets/images/icons/passenger-icon.png';
import track from './../../assets/images/icons/track-icon.png';

function SmallCard(props) {
   return (
      <div className={s.card}>
         <div className={s.modelBlock}>
            <h4 className={s.title}>{props.title}</h4>
            <img className={s.cardImage} src={props.image} alt="model-image" />
         </div>
         <div className={s.benefits}>
            <div className={s.item}>
               <Benefit benefitImg={speed} benefitTxt="240 км/ч" />
            </div>
            <div className={s.item}>
               <Benefit benefitImg={passenger} benefitTxt="3+1 пасс" />
            </div>
            <div className={s.item}>
               <Benefit benefitImg={track} benefitTxt="602 км" />
            </div>
            <button className={s.btn}>Подробнее</button>
         </div>

      </div>

   );



}

export default SmallCard;