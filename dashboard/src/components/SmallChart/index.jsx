import React from 'react';
import { SmallChartContainer } from './style';

const SmallChart = ({ title, data, pink, strong }) => {
  return (
    <SmallChartContainer pink={pink} strong={strong}>
      <p>{title}</p>
      <span>{data}</span>
    </SmallChartContainer>
  );
};

export default SmallChart;
