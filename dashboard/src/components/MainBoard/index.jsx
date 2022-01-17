import React, { useContext } from 'react';
import {
  BigChartContainer,
  ChartHeader,
  ChartContainer,
  LeftSectionContainer,
  RightSectionContainer,
} from './style';
import { ReactComponent as ArrowDown } from 'src/assets/arrowDownBlack.svg';
import { ReactComponent as LegendGray } from 'src/assets/legendGray.svg';
import { ReactComponent as LegendPink } from 'src/assets/legendPink.svg';
import Chart from 'src/components/Chart';
import Context from 'src/context/context';

const rightSectionContent = [
  { title: 'Mês', highlight: 'Julho' },
  { title: 'Ano', highlight: '2020' },
  { title: 'Total de Faturamento', highlight: 'R$ 45.000,00' },
  { title: 'Análise comparativa', highlight: 'Positivo' },
];

const MainBoard = () => {
  const { stores, setChoice, choice, width, setWidth } = useContext(Context);

  const handleChoice = (event) => {
    setChoice(event.target.value);
    setWidth(`${14.5 * event.target.value.length}px`);
  };

  return (
    <BigChartContainer>
      <LeftSectionContainer>
        <ChartHeader>
          <div>
            <h3>Total de Faturamento Mensal</h3>
            <span>Julho 2020</span>
          </div>
          <div className="rightSide">
            <p>
              <LegendPink />
              Este mês
            </p>
            <p>
              <LegendGray />
              Mês passado
            </p>
          </div>
        </ChartHeader>
        <ChartContainer>
          <Chart />
        </ChartContainer>
      </LeftSectionContainer>
      <RightSectionContainer>
        <div>
          <p>Loja</p>
          <select
            onChange={handleChoice}
            value={choice}
            style={{ width: width}}
          >
            {stores.map((store, index) => (
              <option key={index} value={store.name}>
                {store.name}
              </option>
            ))}
          </select>
        </div>
        {rightSectionContent.map((content, index) => {
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
