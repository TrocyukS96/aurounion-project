import React from 'react';
import s from './BigCard.module.scss';
import speed from './../../assets/images/icons/speed-icon.png';
import passenger from './../../assets/images/icons/passenger-icon.png';
import track from './../../assets/images/icons/track-icon.png';
import {NavLink} from 'react-router-dom';

function BigCard(props) {
   return (
      <div className={s.card}>
         <div className={s.modelBlock}>
            <h3 className={s.title}>{props.title}</h3>
            <img сlassName={s.cardImg} src={props.img} alt="model-icon" />
         </div>
         <div className={s.infoBlock}>
            <ul className={s.list}>
               <li className={s.item}>
                  <img src={speed} alt="speed-icon" />
                  <div className={s.itemText}>240 км/ч</div>
               </li>
               <li className={s.item}>
                  <img src={passenger} alt="passenger-icon" />
                  <div className={s.itemText}>3+1 пасс</div>
               </li>
               <li className={s.item}>
                  <img src={track} alt="track-icon" />
                  <div className={s.itemText}>650 км</div>
               </li>
               <NavLink to='/Review' className={s.cardLink}>Подробнее</NavLink>
            </ul>
         </div>
      </div>

   );



}

export default BigCard;