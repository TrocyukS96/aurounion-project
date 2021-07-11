import React from 'react';

import styled from 'styled-components';
import close from './../../../../assets/images/icons/close-icon.png';

const StyledCloseBurger = styled.button`
   position: absolute;
   top: 11px;
   right: 11px;

   cursor:pointer;
`



function CloseButton(props) {
   // debugger
   // const [open, setOpen ] = useState(false)
   return (
      <StyledCloseBurger onClick={() => props.setOpen(!props.open)} >
      <img src={close} alt="close-icon" />
      </StyledCloseBurger>
   );
}

export default CloseButton;