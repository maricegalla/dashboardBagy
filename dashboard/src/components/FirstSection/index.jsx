import React, { useEffect, useState } from 'react';
import { FirstSectionContainer } from './style';
import SmallChart from 'src/components/SmallChart';
import api from 'src/services/api';

const cardContent = [
  { title: 'Total de Lojas' },
  { title: 'Faturamento Total' },
  { title: 'Loja Destaque' },
  { title: 'Meta Mensal' },
];

const FirstSection = () => {
  const [info, setInfo] = useState({});

  const getInfo = async () => {
    const data = await api.get('/mainInfo');
    const allInfo = data.data;
    setInfo(allInfo[0]);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <FirstSectionContainer>
      <SmallChart strong title={cardContent[0].title} data={info.numberOfStores} />
      <SmallChart pink title={cardContent[1].title} data={info.totalIncome} />
      <SmallChart title={cardContent[2].title} data={info.featuredStore} />
      <SmallChart title={cardContent[3].title} data={info.monthlyGoal} />
    </FirstSectionContainer>
  );
};

export default FirstSection;
