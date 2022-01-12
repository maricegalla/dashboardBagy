import React from 'react';
import { PlansAndGoalsContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';
import Header from 'src/components/Header';

const PlansAndGoals = () => {
  return (
    <PlansAndGoalsContentContainer>
      <Header section={'Planos e Metas'} />
      <div className={'baggy'}>
        <img src={logoPink} alt="logo" />
        <h1>Planos e Metas</h1>
      </div>
    </PlansAndGoalsContentContainer>
  );
};

export default PlansAndGoals;
