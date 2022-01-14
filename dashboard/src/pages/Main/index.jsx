import React from 'react';
import { MainContentContainer } from './style';
import Header from 'src/components/Header';
import FirstSection from 'src/components/FirstSection';
import SecondSection from 'src/components/SecondSection';
import ThirdSection from 'src/components/ThirdSection';


const Main = () => {
  
  return (
    <MainContentContainer>
      <Header section={'Visão Geral'}/>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </MainContentContainer>
  );
};

export default Main;
