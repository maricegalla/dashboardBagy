import React from 'react';
import { StoresContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';

const Stores = () => {
  return <StoresContentContainer>
    <img src={logoPink} alt='logo'/>
      <h1>Lojas</h1>
  </StoresContentContainer>;
};

export default Stores;
