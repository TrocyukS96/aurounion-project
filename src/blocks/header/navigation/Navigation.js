import React from 'react';
import s from './Navigation.module.scss';

function Navigation() {
   return (
      <nav className={s.navMenu}>
         <ul className={s.navList}>
            <li className={s.navItem}>
               <a href="#" className={s.navLink}>Модели</a>
            </li>
            <li className={s.navItem}>
               <a href="#" className={s.navLink}>Обзор вертолетов</a>
            </li>
            <li className={s.navItem}>
               <a href="#" className={s.navLink}>О компании</a>
            </li>
            <li className={s.navItem}>
               <a href="#" className={s.navLink}>Преимущества</a>
            </li>
            <li className={s.navItem}>
               <a href="#" className={s.navLink}>Калькулятор</a>
            </li>
            <li className={s.navItem}>
               <a href="#" className={s.navLink}>Услуги</a>
            </li>
            <li className={s.navItem}>
               <a href="#" className={s.navLink}>Новости</a>
            </li>

         </ul>
      </nav>
   );
}

export default Navigation;