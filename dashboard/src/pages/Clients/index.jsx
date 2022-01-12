import React from 'react';
import { ClientsContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';

const Clients = () => {
  return (
    <ClientsContentContainer>
      <img src={logoPink} alt='logo'/>
      <h1>Clientes</h1>
    </ClientsContentContainer>
  );
};

export default Clients;
