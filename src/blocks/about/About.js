import React from 'react';
import s from './About.module.scss';

import Logo from './../../blocks/header/logo/Logo';
import playIcon from './../../assets/images/icons/playIcon.png';



function About() {
   return (
      <div className={s.about}>
         <div className={s.container}>
            <div className={s.wrap}>
               <div className={s.content}>
                  <h2 className={s.title}>
                     <span>КРАТКО</span>
                     O КОМПАНИИ
                  </h2>
                  <div className={s.discr}>
                     <p className={s.text}>Значимость этих проблем настолько очевидна, что укрепление и развитие структуры требуют определения и уточнения дальнейших направлений развития. </p>
                     <p className={s.text}>Развитие структуры требуют определения и уточнения дальнейших направлений развития.</p>
                  </div>
                  <ul className={s.decisions}>
                     <li className={s.item}>
                        <span> 15 лет</span>
                        Успешной работы
                     </li>
                     <li className={s.item}>
                        <span> 5000+</span>
                        Довольных клиентов
                     </li>
                     <li className={s.item}>
                        <span> 100+</span>
                        Человек в команде
                     </li>
                  </ul>
                  <div className={s.linkBlock}>
                     <a className={s.link} href="#">Узнать больше</a>
                  </div>
               </div>
               <div className={s.playBlock}>
                  <div className={s.circle}>
                     <svg width="800" height="700">
                        <circle r="300" cx="400" cy="350"
                           fill="transparent" stroke="gray" stroke-width="2"
                        />
                        <circle r="300" cx="400" cy="350"
                           fill="transparent"
                           stroke="white"
                           stroke-width="7"
                           stroke-dashoffset="-137"
                           stroke-dasharray="890"
                        />
                        <circle r="260" cx="400" cy="350"
                           fill="transparent" stroke="gray" stroke-width="2"
                        />
                        <circle
                           r="260"
                           cx="400"
                           cy="350"
                           fill="transparent"
                           stroke="white"
                           stroke-width="7"
                           stroke-dashoffset="100"
                           stroke-dasharray="800"
                        />
                        <circle r="220" cx="400" cy="350"
                           fill="transparent" stroke="gray" stroke-width="2"
                        />
                        <circle r="220" cx="400" cy="350"
                           fill="transparent"
                           stroke="white"
                           stroke-width="7"
                           stroke-dashoffset="-600"
                           stroke-dasharray="660"
                        />
                        {/* small circles */}

                        {/* <circle
                           r="15"
                           cx="168"
                           cy="135"
                           fill="white"
                           stroke="white"
                           stroke-width="1"
                        />

                        <circle
                           r="15"
                           cx="619"
                           cy="235"
                           fill="white"
                           stroke="white"
                           stroke-width="1"
                        /> */}

                        <defs>
                           <g id="group1" >
                              <circle className={s.circle1}
                                 r="15"
                                 cx="20"
                                 cy="35"
                                 // fill="white"
                                 stroke="white"
                                 stroke-width="1"
                              />
                           </g>
                        </defs>
                        <use xlinkHref="#group1" x="160" y="520" className={s.group1} />
                        <text className={s.text1} x="0" y="589">Официальный диллер</text>

                        <use xlinkHref="#group1" x="194" y="135" className={s.group2} />
                        <text className={s.text2} x="5" y="175">Официальный диллер</text>

                        <use xlinkHref="#group1" x="535" y="160" className={s.group3} />
                        <text className={s.text3} x="584" y="200">Официальный диллер</text>



                     </svg>

                     <div className={s.btnBlock}>
                        <Logo />
                        <button className={s.playBtn}>
                           <img src={playIcon} alt="play-image" className={s.playImg} />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>


   );
}

export default About;