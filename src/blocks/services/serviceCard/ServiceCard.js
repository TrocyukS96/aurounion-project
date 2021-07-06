import React from 'react';
import s from './ServiceCard.module.scss';


function ServiceCard(props) {
   return (
      <div className={s.card}>
         <div className={s.top}>
            <img className={s.topImg} src={props.image} alt="card-icon" />
            <h3 className={s.title}>{props.title}
               <span>{props.titleSpan}</span>
            </h3>
         </div>
         <div className={s.text}>{props.text}</div>
         <button className={s.btn}>Подробнее</button>
      </div>


   );
}

export default ServiceCard;