import React from 'react';
import s from './NewsCard.module.scss';

function NewsCard(props) {
   return (
      <div className={s.card}>
         <img className={s.cardImg} src={props.image} alt="card-image" />
         <div className={s.content}>
            <span className={s.date}>{props.date}</span>
            <h4 className={s.title}>{props.title}</h4>
            <p className={s.text}>{props.text}</p>

            <button className={s.btn}>Подробнее</button>
         </div>
      </div>


   );
}

export default NewsCard;