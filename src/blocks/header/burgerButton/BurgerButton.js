import React from 'react';
import s from './BurgerButton.module.scss';
import burgerImg from './../../../assets/images/icons/burger-icon.png';
import arrow from './../../../assets/images/icons/arrow.png';

function BurgerButton() {
   return (
      <div className={s.burgerBlock}>
         <button className={s.burgerButton}>
            <img className={s.burgerImg} src={burgerImg} alt="burger-icon" />
         </button>
         <div className={s.arrowBlock}>
            <img src={arrow} alt="arrow-icon" />
            <a className={s.link} href="#">
               Листай дальше
            </a>
         </div>



      </div>

   );
}

export default BurgerButton;