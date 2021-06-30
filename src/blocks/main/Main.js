import React from 'react';
import s from './Main.module.scss';
import TitleCard from '../../components/titleCard/TitleCard';
import InstIcon from './../../assets/images/icons/instagram-icon.png';
import FBIcon from './../../assets/images/icons/facebook-icon.png';
import UTIcon from './../../assets/images/icons/youtube-icon.png';
import circle from './../../assets/images/icons/circle.png';


function Main() {
   return (
      <div className={s.main}>
         <div className={s.container}>
            <div className={s.mainWrap}>
               <TitleCard
                  title="Успейте купить Robinson R44, R66"
                  text="Желающие приобрести вертолет могут оформить заказ по действующим ценам до очередного ежегодного повышения цен в январе 2021 года"
                  btnTextLeft="Оформить заказ"
               />
               <div className={s.socialBox}>
                  <a className={s.socialLink} href="#">
                     <img className={s.socialIcon} src={FBIcon} alt="facebook-icon" />
                  </a>
                  <a className={s.socialLink} href="#">
                     <img className={s.socialIcon} src={UTIcon} alt="youtube-icon" />
                  </a>
                  <a className={s.socialLink} href="#">
                     <img className={s.socialIcon} src={InstIcon} alt="instagram-icon" />
                  </a>
               </div>

            </div>
         </div>



         <div className={s.circleBox}>
            <img className={s.circle} src={circle} alt="circle-icon" />
         </div>
         <div className={s.shadowBox}></div>

      </div>
   );
}

export default Main;