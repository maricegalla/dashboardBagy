import React from 'react';
import { StoresContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';
import Header from 'src/components/Header';

const Stores = () => {
  return (
    <StoresContentContainer>
    <Header section={'Lojas'} />
      <div className='bagy'>
        <img src={logoPink} alt="logo" />
        <h1>Lojas</h1>
      </div>
    </StoresContentContainer>
  );
};

export default Stores;
