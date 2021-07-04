import React from 'react';
import s from './Advantages.module.scss';
import AdvantagesCard from './advantagesCard/AdvantagesCard';
import star from './../../assets/images/icons/star-icon.png';
import time from './../../assets/images/icons/clock-icon.png';
import freedom from './../../assets/images/icons/bird-icon.png';
import trafficLights from './../../assets/images/icons/traffic-lights-icon.png';

function Advantages() {
   return (
      <div className={s.advantages}>
         <div className={s.container}>
            <div className={s.wrap}>
               <div className={s.content}>
                  <h2 className={s.title}>
                  что вы получите<span>приобретая robinson</span>
                  </h2>
                  <ul className={s.advantagesList}>
                     <li className={s.advantagesItem}>
                        <AdvantagesCard image={star} title="Статус" text="Вертолет - это престижная покупка, которая подчеркивает не только ваш статус, но и статус вашей компании"/>
                     </li>
                     <li className={s.advantagesItem}>
                        <AdvantagesCard image={time} title="Время" text="Экономия времени при полете на вертолете относительно автомобиля составляет от 3 до 8 раз"/>
                     </li>
                     <li className={s.advantagesItem}>
                        <AdvantagesCard image={freedom} title="Свобода" text="Вертолет способен доставить вас в те места, куда не добраться на любом другом транспорте для бизнеса или же отдыха"/>
                     </li>
                     <li className={s.advantagesItem}>
                        <AdvantagesCard image={trafficLights} title="Отсутствие пробок" text="ВНикакие пробки и заторы на дорогах не страшны"/>
                     </li>
                  </ul>
               </div>
               <form className={s.form}>
                  <h3 className={s.formTitle}>
                     <span>Есть Вопросы? </span>Оставьте заявку прямо сейчас
                  </h3>
                  <div className={s.inputBox}>
                     <input className={s.inputText} type="text" placeholder="Имя" />
                  </div>
                  <div className={s.inputBox}>
                     <input className={s.inputTel} type="tel" placeholder="Номер телефона" />
                  </div>
                  <button className={s.btn}>ОСТАВИТЬ ЗАЯВКУ</button>
                  <p className={s.formTxt}>Оставьте заявку, мы перезвоним вам в ближайшее время и ответим на все ваши вопросы</p>
               </form>
            </div>
         </div>
      </div>


   );
}

export default Advantages;