import React from 'react';
import { ConfigurationContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';
import Header from 'src/components/Header';

const Configuration = () => {
  return (
    <ConfigurationContentContainer>
      <Header section={'Configurações'} />
      <div className='bagy'>
        <img src={logoPink} alt="logo" />
        <h1>Configurações</h1>
      </div>
    </ConfigurationContentContainer>
  );
};

export default Configuration;
