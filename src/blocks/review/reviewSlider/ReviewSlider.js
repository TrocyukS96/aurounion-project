// import Swiper core and required modules
import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './ReviewSlider.scss';

import ReviewSlide from './../reviewSlide/ReviewSlide';



// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

export default () => {
   return (
      <div className="reviewCorousel">
         <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
         breakpoints={{
            0:{
               spaceBetween:40
            },
            1200: {
               
               spaceBetween:20
             }
            }}
         >
            <SwiperSlide>
               <ReviewSlide/>
            </SwiperSlide>
            <SwiperSlide>
               <ReviewSlide/>
            </SwiperSlide>
            <SwiperSlide>
               <ReviewSlide/>
            </SwiperSlide>
            <SwiperSlide>
               <ReviewSlide/>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};