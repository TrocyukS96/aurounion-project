import React from 'react';
import s from './TitleCard.module.scss';

function TitleCard(props) {
   return (
      <div className={s.card}>
         <h1 className={s.title}>{props.title}</h1>
         <p className={s.text}>{props.text}</p>

         <div className={s.buttonsBlock}>
            <button className={s.btnLeft}>{props.btnTextLeft}</button>
            <button className={s.btnRight}>{props.btnTextRight}</button>
         </div>
      </div>
   );
}

export default TitleCard;