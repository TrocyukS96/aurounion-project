import React from 'react';
import s from './News.module.scss';
import NewsCard from './newsCard/NewsCard';
import newsImg1 from './../../assets/images/news/image1.png';
import newsImg2 from './../../assets/images/news/image2.png';
import newsImg3 from './../../assets/images/news/image3.png';
import newsImg4 from './../../assets/images/news/image4.png';
import newsImg5 from './../../assets/images/news/image5.png';
import newsImg6 from './../../assets/images/news/image6.png';
import newsImg7 from './../../assets/images/news/image7.png';
import newsImg8 from './../../assets/images/news/image8.png';

function News() {
   return (
      <div className={s.news}>
         <div className={s.container}>
            <div className={s.wrap}>
               <NewsCard image={newsImg1} date="10.02.2021" title="Соглашение с аэропортом в Калуге" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения." />
               <NewsCard image={newsImg2} date="10.02.2021" title="Соглашение с аэропортом в Калуге" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения." />
               <NewsCard image={newsImg3} date="10.02.2021" title="Соглашение с аэропортом в Калуге" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения." />
               <NewsCard image={newsImg4} date="10.02.2021" title="Соглашение с аэропортом в Калуге" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения." />
               <NewsCard image={newsImg5} date="10.02.2021" title="Соглашение с аэропортом в Калуге" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения." />
               <NewsCard image={newsImg6} date="10.02.2021" title="Соглашение с аэропортом в Калуге" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения." />
               <NewsCard image={newsImg7} date="10.02.2021" title="Соглашение с аэропортом в Калуге" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения." />
               <NewsCard image={newsImg8} date="10.02.2021" title="Соглашение с аэропортом в Калуге" text="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения." />
            </div>
            <div className={s.buttons}>
               <button className={s.btnNum}>1</button>
               <button className={s.btnNum}>2</button>
               <button className={s.btnNum}>3</button>
               <button className={s.btnNum}>4</button>
            </div>
         </div>
      </div>


   );
}

export default News;