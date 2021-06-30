import React from 'react';

import s from './Header.module.scss';
import Logo from './logo/Logo';

import BurgerMenu from './burgerMenu/BurgerMenu';
import BurgerButton from './burgerButton/BurgerButton';
import Navigation from './navigation/Navigation';
import ButtonBlock from './buttonBlock/ButtonBlock';

function Header() {
   return (
      <header className={s.header}>

         <div className={s.container}>
            <div className={s.headerWrap}>
               <BurgerMenu />
               <BurgerButton />
               <Logo />
               <Navigation />
               <ButtonBlock />
            </div>
         </div>
      </header>
   );
}

export default Header;
