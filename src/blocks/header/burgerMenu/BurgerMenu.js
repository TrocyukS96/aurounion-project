import React from 'react';
import s from './BurgerMenu.module.scss';
import Logo from '../logo/Logo';
import close from '../../../assets/images/icons/close-icon.png';

function BurgerMenu() {
   return (
      <div className={s.burger}>
         <Logo />
         <ul className={s.menuList}>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">История компании</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Каталог вертолетов</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Каталог запчастей</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Конфигуратор</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Новости</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Обслуживание</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Техническая информация</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Услуги</a>
            </li>
         </ul>
         <ul className={s.infoList}>
            <li className={s.infoItem}>
               <a className={s.infoLink} href="tel:+74957234444">+7 (495) 723-44-44</a>
            </li>
            <li className={s.infoItem}>
               <a className={s.infoLink} href="tel:+79637775757">+7 (963) 777-57-57</a>
            </li>
            <li className={s.infoItem}>
               <a className={s.infoLink} href="mailto:info@aerounion.msk.ru">info@aerounion.msk.ru</a>
            </li>
            <li className={s.infoItem}>
               Координаты: N56.12695 E037.0695
            </li>
            <li className={s.infoItem}>
               Частота радиосвязи: 123.9 Мгц - UUCH
            </li>
         </ul>
         <button className={s.close}>
            <img src={close} alt="close-icon" />
         </button>
      </div>
   );
}

export default BurgerMenu;












