import React from 'react';
import { PlansAndGoalsContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';

const PlansAndGoals = () => {
  return <PlansAndGoalsContentContainer>
    <img src={logoPink} alt='logo'/>
      <h1>Planos e Metas</h1>
  </PlansAndGoalsContentContainer>;
};

export default PlansAndGoals;
