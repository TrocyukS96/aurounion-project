import React from 'react';
import s from './Models.module.scss';
import TitleCard from '../../components/titleCard/TitleCard';

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
               <TitleCard
                  title="Много информации - не знаете Что лучше выбрать?"
                  text="Оставьте заявку, мы перезвоним вам и ответим на все ваши вопросы"
                  btnTextLeft="Подробнее"
                  btnTextRight="Все модели"
                  style={{ maxWidth: "760px" }}
               />
            </div>
         </div>
      </div>


   );
}

export default Models;