import React from 'react';
import {
  BigChartContainer,
  ChartHeader,
  ChartContainer,
  LeftSectionContainer,
  RightSectionContainer,
} from './style';
import { ReactComponent as ArrowDown } from 'src/assets/arrowDownBlack.svg';
import {ReactComponent as LegendGray} from 'src/assets/legendGray.svg';
import {ReactComponent as LegendPink} from 'src/assets/legendPink.svg';

const leftSectionContent = [
  { title: 'Loja', highlight: 'Estilo Pri' },
  { title: 'Mês', highlight: 'Julho' },
  { title: 'Ano', highlight: '2020' },
  { title: 'Total de Faturamento', highlight: 'R$ 45.000,00' },
  { title: 'Análise comparativa', highlight: 'Positivo' },
];

const MainBoard = () => {
  return (
    <BigChartContainer>
      <LeftSectionContainer>
        <ChartHeader>
          <div>
            <h3>Total de Faturamento Mensal</h3>
            <span>JULHO 2020</span>
          </div>
          <div className="rightSide">
            <p><LegendPink/>Este mês</p>
            <p><LegendGray/>Mês passado</p>
          </div>
        </ChartHeader>
        <ChartContainer />
      </LeftSectionContainer>
      <RightSectionContainer>
        {leftSectionContent.map((content, index) => {
          if (content.title === 'Total de Faturamento') {
            return (
              <div key={index}>
                <p>{content.title}</p>
                <h2>{content.highlight}</h2>
              </div>
            );
          }
          if (content.title === 'Análise comparativa') {
            return (
              <div key={index} className="noBorder">
                <p>{content.title}</p>
                <h2 className="green">{content.highlight}</h2>
              </div>
            );
          } else {
            return (
              <div key={index}>
                <p>{content.title}</p>
                <h2 className="underline">
                  {content.highlight}
                  <ArrowDown />
                </h2>
              </div>
            );
          }
        })}
      </RightSectionContainer>
    </BigChartContainer>
  );
};

export default MainBoard;
