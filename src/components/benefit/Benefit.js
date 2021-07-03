import React from 'react';
import s from './Benefit.module.scss';



function Benefit(props) {
   return (
      <div className={s.benefit}>
         <img className={s.benefitImg} src={props.benefitImg} alt="benefit icon" />
         <div className={s.text}>{props.benefitTxt}</div>
      </div>


   );
}

export default Benefit;