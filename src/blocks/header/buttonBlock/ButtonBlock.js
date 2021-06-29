import s from './ButtonBlock.module.scss';
import statistic from './../../../assets/images/icons/itemGroup.png';
import search from './../../../assets/images/icons/search-icon.png';


function ButtonBlock() {
   return (
      <header className={s.buttonBLock}>
         <div className={s.langBlock}>
            <button className={s.eng}>ENG</button>
            <button className={s.rus}>RUS</button>
         </div>
         <div className={s.statisticBlock}>
            <button className={s.statistic}>
               <img className={s.statisticImg} src={statistic} alt="statistic-icon" />
            </button>
            <span>2</span>
         </div>
         <button className={s.btnSearch}>
            <img className={s.searchIcon} src={search} alt="search-icon" />
         </button>
      </header>
   );
}

export default ButtonBlock;