import React from 'react';
import { ClientsContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';
import Header from 'src/components/Header';

const Clients = () => {
  return (
    <ClientsContentContainer>
      <Header section={'Clientes'} />
      <div className='bagy'>
        <img src={logoPink} alt="logo" />
        <h1>Clientes</h1>
      </div>
    </ClientsContentContainer>
  );
};

export default Clients;
