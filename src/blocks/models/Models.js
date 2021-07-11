import React from 'react';
import s from './Models.module.scss';
import { NavLink } from 'react-router-dom';
import ModelsSwiper from '../../components/modelsSwiper/ModelsSwiper';


function Models() {
   return (
      <div className={s.models}>
         <div className={s.container}>
            <div className={s.wrap}>
               <div className={s.cards}>
                  {/* <BigCard title="Robinson R44" img={model1} />
                  <BigCard title="Robinson R66" img={model2} /> */}
                  <ModelsSwiper />
                  <div className={s.paginationBlock}>2123131</div>
               </div>
               {/* <TitleCard
                  title="Много информации - не знаете Что лучше выбрать?"
                  text="Оставьте заявку, мы перезвоним вам и ответим на все ваши вопросы"
                  btnTextLeft="Подробнее"
                  btnTextRight="Все модели"
                  style={{ maxWidth: "760px" }}
               /> */}
               <div className={s.content}>
                  <h2 className={s.title}>
                     <span>Много информации - не знаете</span>
                     Что лучше выбрать?
                  </h2>
                  <p className={s.text}>Оставьте заявку, мы перезвоним вам и ответим на все ваши вопросы</p>
                  <div className={s.buttonsBlock}>
                     <button className={s.btn}>Оставить заявку</button>
                     <NavLink to="/AllModels" className={s.link}>Все модели</NavLink>

                  </div>
               </div>
            </div>
         </div>
      </div>

   );
}

export default Models;