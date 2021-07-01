// import Swiper core and required modules
import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './ModelsSwiper.scss';

import BigCard from './../bigCard/BigCard';
import model1 from './../../assets/images/models/model1.png';
import model2 from './../../assets/images/models/model2.png';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
   return (
      <div className="carrousel">
         <Swiper
            spaceBetween={5}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
         
         >
            <SwiperSlide>
            <BigCard title="Robinson R44" img={model1} />
            </SwiperSlide>
            <SwiperSlide>
            <BigCard title="Robinson R66" img={model2} />
            </SwiperSlide>
            <SwiperSlide>
            <BigCard title="Robinson R44" img={model1} />
            </SwiperSlide>
            <SwiperSlide>
            <BigCard title="Robinson R66" img={model2} />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};