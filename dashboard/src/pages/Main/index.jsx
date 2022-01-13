import React from 'react';
import { MainContentContainer } from './style';
import Header from 'src/components/Header';
import FirstSection from 'src/components/FirstSection';
import ThirdSection from 'src/components/ThirdSection';


const Main = () => {
  
  return (
    <MainContentContainer>
      <Header section={'Visão Geral'}/>
      <FirstSection />
      <ThirdSection />
    </MainContentContainer>
  );
};

export default Main;
