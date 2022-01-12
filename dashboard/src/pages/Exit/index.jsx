import React from 'react';
import { ExitContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';
import Header from 'src/components/Header';

const Exit = () => {
  return <ExitContentContainer>
    <Header section={'Sair'} />
    <div className={'baggy'}>

    <img src={logoPink} alt='logo'/>
      <h1>Sair</h1>
    </div>
  </ExitContentContainer>;
};

export default Exit;
