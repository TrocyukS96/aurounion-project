import React from 'react';
import s from './Logo.module.scss';
import logo from './../../../assets/images/icons/logo.png';
import {NavLink} from 'react-router-dom';

function Logo(props) {
   return (
      <NavLink className={s.logo} to="/Main">
         <img src={logo} className={s.logoImg} alt="logo-icon" />
      </NavLink>
   );
}

export default Logo;