import React, { useState } from 'react';
import s from './Header.module.scss';
import Logo from './logo/Logo';

import BurgerMenu from './burgerMenu/BurgerMenu';
import BurgerButton from './burgerButton/BurgerButton';
import Navigation from './navigation/Navigation';
import ButtonBlock from './buttonBlock/ButtonBlock';

function Header() {
   const [open, setOpen] = useState(false)


   return (
      <header className={s.header} >

         <div className={s.container}>
            <div className={s.headerWrap}>
               <BurgerMenu open={open} setOpen={setOpen} />
               <BurgerButton open={open} setOpen={setOpen} />
               <div className={s.logoBox}><Logo /></div>
               <Navigation open={open} setOpen={setOpen}/>
               <ButtonBlock />
            </div>
         </div>
      </header>
   );
}

export default Header;
