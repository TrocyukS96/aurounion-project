import React from 'react';
import s from './Services.module.scss';

import ServiceCard from './serviceCard/ServiceCard';
import serviceCard1 from './../../assets/images/Services/service-icon1.png';
import serviceCard2 from './../../assets/images/Services/service-icon2.png';
import serviceCard3 from './../../assets/images/Services/service-icon3.png';
import serviceCard4 from './../../assets/images/Services/service-icon4.png';
import serviceCard5 from './../../assets/images/Services/service-icon5.png';
import serviceCard6 from './../../assets/images/Services/service-icon6.png';


function Services() {
   return (
      <div className={s.services}>
         <div className={s.container}>
            <div className={s.wrap}>
               <ServiceCard image={serviceCard1} title="Продажа" titleSpan="вертолетов" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры  требуют требуют требуют" />
               <ServiceCard image={serviceCard2} title="Техническое" titleSpan="обслуживание" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры  требуют требуют требуют" />
               <ServiceCard image={serviceCard3} title="Запчасти" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры  требуют требуют требуют" />
               <ServiceCard image={serviceCard4} title="Установка" titleSpan="доп. оборудования" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры  требуют требуют требуют" />
               <ServiceCard image={serviceCard5} title="Тюнинг" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры  требуют требуют требуют" />
               <ServiceCard image={serviceCard6} title="Дополнительные" titleSpan="услуги" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры  требуют требуют требуют" />
            </div>
         </div>
      </div>


   );
}

export default Services;