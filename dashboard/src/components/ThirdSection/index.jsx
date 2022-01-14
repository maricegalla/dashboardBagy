import React from 'react';
import { ThirdSectionContainer } from './style';
import LeftTable from 'src/components/LeftTable';
import RightTable from 'src/components/RightTable';


const FirstSection = () => {
  return (
    <ThirdSectionContainer>
      <LeftTable />
      <RightTable />
    </ThirdSectionContainer>
  );
};

export default FirstSection;
