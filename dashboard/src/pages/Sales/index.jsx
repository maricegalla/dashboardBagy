import React from 'react';
import { SalesContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';

const Sales = () => {
  return <SalesContentContainer>
    <img src={logoPink} alt='logo'/>
      <h1>Vendas</h1>
  </SalesContentContainer>;
};

export default Sales;
