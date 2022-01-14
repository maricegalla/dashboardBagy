import React from 'react';
import { ThirdSectionContainer } from './style';
import MediumChart from 'src/components/MediumChart';
import LeftTable from 'src/components/LeftTable';


const FirstSection = () => {
  return (
    <ThirdSectionContainer>
      <LeftTable />
      <MediumChart children={''}/>
    </ThirdSectionContainer>
  );
};

export default FirstSection;
