import React from 'react';
import { SalesContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';
import Header from 'src/components/Header';

const Sales = () => {
  return (
    <SalesContentContainer>
      <Header section={'Vendas'} />
      <div className='bagy'>
        <img src={logoPink} alt="logo" />
        <h1>Vendas</h1>
      </div>
    </SalesContentContainer>
  );
};

export default Sales;
