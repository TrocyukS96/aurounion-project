import React from 'react';
import s from './Logo';
import logo from './../../../assets/images/icons/logo.png';

function Logo() {
   return (
      <a className={s.logo} href="#">
         <img src={logo} className={s.logoImg} alt="logo-icon" />
      </a>
   );
}

export default Logo;