import React from 'react';
import s from './BurgerButton.module.scss';
import burgerImg from './../../../assets/images/icons/burger-icon.png';
import arrow from './../../../assets/images/icons/arrow.png';

import styled from 'styled-components';

const StyledBurger = styled.div`
   background: linear-gradient(112.21deg, #1F1F1F 2.72%, #121212 101.59%);
  
   width: 81px;
   height: 100%;
   padding: 42px 0 54px;
   // z-index:1000;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   
   border-right: 2px solid white;

   .burgerButton {
      width: 43px;
      height: 30px;

      background-color:${({ open }) => open ? 'yellow' : 'transparent'};
   
      cursor: pointer;
   
      &:hover {
         opacity: 0.7;
      }
   
      &:active {
         background: grey;
      }
   }
   .arrowBlock {
      display: flex;
      flex-direction: column-reverse;
      // transform: rotate(-90deg);
      align-items: center;
   
      & img {
         margin-top: 3.75rem;
      }
   }
   
   .link {
      transform: rotate(-90deg);
   
      width: 9.06rem;
   
      margin-bottom: 1rem;
   
      color: #fff;
   
      &:hover {
         color: red;
      }
   }
   
   .arrowBlock {
      img {
         height: 3.09rem;
         width: 1.4rem;
      }
   }
   .burgerImg {
      width: 100%;
      height: auto;
   }
}
`



function BurgerButton(props) {
   // const [open, setOpen ] = useState(false)
   return (
      <>
      <StyledBurger >
         <button className='burgerButton' onClick={() => props.setOpen(!props.open)}>
            <img className='burgerImg' src={burgerImg} alt="burger-icon" />
         </button>
         <div className='arrowBlock'>
            <img src={arrow} alt="arrow-icon" />
            <a className='link' href="#">
               Листай дальше
            </a>
         </div>



      </StyledBurger>
      {/* <BurgerMenu open={props.open} setOpen={props.setOpen} /> */}
  
      </>

   );
}

export default BurgerButton;