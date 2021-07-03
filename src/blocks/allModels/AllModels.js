import React from 'react';
import SmallCard from '../../components/smallCard/SmallCard';
import s from './AllModels.module.scss';

import smallModel1 from './../../assets/images/allmodels/r-22.png';
import smallModel2 from './../../assets/images/allmodels/r-44-clipper1.png';
import smallModel3 from './../../assets/images/allmodels/r-44-clipper2.png';
import smallModel4 from './../../assets/images/allmodels/r-44-clipper2-fixed.png';
import smallModel5 from './../../assets/images/allmodels/r-44-raven1.png';
import smallModel6 from './../../assets/images/allmodels/r-44-raven2.png';
import smallModel7 from './../../assets/images/allmodels/r-44-cadet.png';
import smallModel8 from './../../assets/images/allmodels/r-44-floats-cadet.png';
import smallModel9 from './../../assets/images/allmodels/r-66-turbine.png';
import smallModel10 from './../../assets/images/allmodels/r-66-turbine-marine.png';




function AllModels() {
   return (
      <div className={s.allModels}>
         <div className={s.container}>
            <div className={s.wrap}>
               <SmallCard image={smallModel1} title="R22 Beta II" />
               <SmallCard image={smallModel2} title="R44 Clipper I" />
               <SmallCard image={smallModel3} title="R44 Clipper II Popout" />
               <SmallCard image={smallModel4} title="R44 Clipper II Fixed" />
               <SmallCard image={smallModel5} title="R44 Raven I" />
               <SmallCard image={smallModel6} title="R44 Raven II" />
               <SmallCard image={smallModel7} title="R44 Cadet" />
               <SmallCard image={smallModel8} title="R44 Cadet with  Floats" />
               <SmallCard image={smallModel9} title="R66 Turbine" />
               <SmallCard image={smallModel10} title="R66 Turbine Marine" />
            </div>
         </div>
      </div>
   );
}

export default AllModels;