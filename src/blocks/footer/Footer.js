import React from 'react';
import s from './Footer.module.scss';

function Footer() {
   return (
      <footer className={s.footer}>
         <div className={s.container}>
            <div className={s.top}>
               <ul className={s.catalog}>
                  <li className={s.catalogItem}>
                     <a className={s.catalogLink} href="#" >R22 Beta II</a>
                  </li>
                  <li className={s.catalogItem}>
                     <a className={s.catalogLink} href="#" >R44 Clipper I</a>
                  </li>
                  <li className={s.catalogItem}>
                     <a className={s.catalogLink} href="#" >R44Clipper II Popout</a>
                  </li>
                  <li className={s.catalogItem}>
                     <a className={s.catalogLink} href="#" >R44 Clipper II Fixed</a>
                  </li>
                  <li className={s.catalogItem}>
                     <a className={s.catalogLink} href="#" >R44 Raven I</a>
                  </li>
                  <li className={s.catalogItem}>
                     <a className={s.catalogLink} href="#" >R22 Beta II</a>
                  </li>
                  <li className={s.catalogItem}>
                     <a className={s.catalogLink} href="#" >R44 Cadet</a>
                  </li>
                  <li className={s.catalogItem}>
                     <a className={s.catalogLink} href="#" >R44 Cadet with Floats</a>
                  </li>
                  <li className={s.catalogItem}>
                     <a className={s.catalogLink} href="#" >R66Turbine Marine</a>
                  </li>
               </ul>
               <ul className={s.config}>
                  <li className={s.configItem}>
                     <a href="#" className={s.confi}>Конфигуратор</a>
                  </li>
                  <li className={s.configItem}>
                     <a href="#" className={s.confi}>Наши работы</a>
                  </li>
                  <li className={s.configItem}>
                     <a href="#" className={s.confi}>Новости</a>
                  </li>
                  <li className={s.configItem}>
                     <a href="#" className={s.confi}>Обслуживание</a>
                  </li>
                  <li className={s.configItem}>
                     <a href="#" className={s.confi}>Тех. информация</a>
                  </li>
                  <li className={s.configItem}>
                     <a href="#" className={s.confi}>Запчасти</a>
                  </li>
               </ul>
               <div className={s.about}>
                  <h4 className={s.aboutTitle}>О компании<span>Доп. услуги:</span></h4>
                  <ul className={s.aboutList}>
                     <li className={s.aboutitem}>
                        <a className={s.aboutLink} href="#">Покраска</a>
                     </li>
                     <li className={s.aboutitem}>
                        <a className={s.aboutLink} href="#">Тюнинг</a>
                     </li>
                     <li className={s.aboutitem}>
                        <a className={s.aboutLink} href="#">Установка доп. оборудования</a>
                     </li>
                  </ul>
               </div>
               <div className={s.subscr}>
                  <h3 className={s.subscrTitle}>Будьте в курсе <span>всех новостей</span></h3>
                  <p className={s.aboutText}>Подпишитесь на рассылку</p>
                  <form>
                     <input type="text" placeholder="Ваш E-mail" />
                     <button>Подписаться</button>
                  </form>
               </div>
            </div>
         </div>
         <div className={s.bottom}>
            <div className={s.wrap}>
               <span className={s.bottomSpan}>© 2021 Все права защищены</span>
               <span className={s.bottomSpan}>Политика конфеденциальности</span>
            </div>
         </div>

      </footer >
   );
}
export default Footer;



