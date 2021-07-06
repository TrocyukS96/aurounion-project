import React from 'react';
import s from './Calculator.module.scss';
import map from './../../assets/images/calculator/map-icon.png';
import route1 from './../../assets/images/icons/route1-icon.png';
import route2 from './../../assets/images/icons/route2-icon.png';


function Calculator(props) {
   return (
      <div className={s.calculator}>
         <div className={s.container}>
            <div className={s.wrap}>
               <img className={s.calcImg} src={map} alt="map-icon" />
               <form className={s.calcForm}>
                  <h3 className={s.title}> на авто или на robinson?</h3>
                  <div className={s.inputBox}>
                     <div className={s.radioBox}>
                        <input className={s.inputRadio} id="radio-1" type="radio" name="radio" value="1" checked />
                        <label for="radio-1">Популярный маршрут</label>
                     </div>

                     <div className={s.radioBox}>
                        <input className={s.inputRadio} id="radio-2" type="radio" name="radio" value="2" />
                        <label for="radio-2">Другой маршрут</label>
                     </div>
                  </div>
                  <div className={s.selectBox}>
                     <h5 className={s.selectTitle}>Откуда</h5>

                     <select className={s.formSelect}>
                        <option>Москва</option>
                        <option>Минск</option>
                     </select>
                  </div>
                  <div className={s.selectBox}>
                     <h5 className={s.selectTitle}>Куда</h5>
                     <select className={s.formSelect}>
                        <option>Москва</option>
                        <option>Минск</option>
                     </select>
                  </div>
                  <div className={s.buttons}>
                     <button className={s.btnTime}>
                        <img src={route1} alt="route-icon" />
                        <span className={s.btnSpan}>40 мин</span>
                     </button>
                     <button className={s.btnTime}>
                        <img src={route2} alt="route-icon" />
                        <span className={s.btnSpan}>2 ч 20 мин</span>
                     </button>
                  </div>
                  <p className={s.formTxt}>Поездка Москва – Тверь на машине: 183км / 70км/ч = 2ч 20 мин. Поездка Москва – Тверь на вертолете: 162км / 246 км/ч = 40 мин</p>
               </form>
            </div>
         </div>
      </div>


   );
}

export default Calculator;