import React from 'react';
import { ConfigurationContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';

const Configuration = () => {
  return <ConfigurationContentContainer>
    <img src={logoPink} alt='logo'/>
      <h1>Configurações</h1>
  </ConfigurationContentContainer>;
};

export default Configuration;
