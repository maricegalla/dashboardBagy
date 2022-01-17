import React, { useContext } from 'react';
import { FirstSectionContainer } from './style';
import SmallChart from 'src/components/SmallChart';
import Context from 'src/context/context';

const cardContent = [
  { title: 'Total de Lojas' },
  { title: 'Faturamento Total' },
  { title: 'Loja Destaque' },
  { title: 'Meta Mensal' },
];

const FirstSection = () => {
  const { info } = useContext(Context);

  return (
    <FirstSectionContainer>
      <SmallChart
        strong
        title={cardContent[0].title}
        data={info.numberOfStores}
      />
      <SmallChart pink title={cardContent[1].title} data={info.totalIncome} />
      <SmallChart title={cardContent[2].title} data={info.featuredStore} />
      <SmallChart title={cardContent[3].title} data={info.monthlyGoal} />
    </FirstSectionContainer>
  );
};

export default FirstSection;
