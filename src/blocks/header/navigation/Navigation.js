import React from 'react';
import s from './Navigation.module.scss';
import {NavLink} from 'react-router-dom';

function Navigation() {
   return (
      <nav className={s.navMenu}>
         <ul className={s.navList}>
            <li className={s.navItem}>
               <NavLink to="/Models" className={s.navLink}>Модели</NavLink>
            </li>
            <li className={s.navItem}>
               <NavLink to="/Review" className={s.navLink}>Обзор вертолетов</NavLink>
            </li>
            <li className={s.navItem}>
               <NavLink to="/About" className={s.navLink}>О компании</NavLink>
            </li>
            <li className={s.navItem}>
               <NavLink to="/Advantages" className={s.navLink}>Преимущества</NavLink>
            </li>
            <li className={s.navItem}>
               <NavLink to="/Calculator" className={s.navLink}>Калькулятор</NavLink>
            </li>
            <li className={s.navItem}>
               <NavLink to="/Services" className={s.navLink}>Услуги</NavLink>
            </li>
            <li className={s.navItem}>
               <NavLink to="/News" className={s.navLink}>Новости</NavLink>
            </li>

         </ul>
      </nav>
   );
}

export default Navigation;