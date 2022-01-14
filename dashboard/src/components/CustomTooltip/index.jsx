import React from 'react';
import { CustomTooltipContainer } from './style';

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <CustomTooltipContainer className="custom-tooltip">
        <p className="label">{`R$ ${payload[0].value}.000,00`}</p>
      </CustomTooltipContainer>
    );
  }

  return null;
};

export default CustomTooltip;
