import React from 'react';
import { ExitContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';

const Exit = () => {
  return <ExitContentContainer>
    <img src={logoPink} alt='logo'/>
      <h1>Sair</h1>
  </ExitContentContainer>;
};

export default Exit;
