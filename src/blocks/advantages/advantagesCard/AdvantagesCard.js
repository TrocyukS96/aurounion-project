import React from 'react';
import s from './AdvantagesCard.module.scss';


function AdvantagesCard(props) {
   return (
      <div className={s.card}>
         <div className={s.imgBox}>
            <img src={props.image} alt="benefits-icon" />
         </div>
         <div className={s.content}>
            <h4 className={s.title}>{props.title}</h4>
            <p className={s.text}>{props.text}</p>
         </div>
      </div>


   );
}

export default AdvantagesCard;