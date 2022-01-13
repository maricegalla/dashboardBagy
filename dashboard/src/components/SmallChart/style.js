import styled from 'styled-components';

const SmallChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 134px;
  width: 260px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  gap: 20px;

  p {
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.pink ? "#fc3c8d" : "#9fa2b4"};
  }

  span {
    font-size: 36px;
    color: ${props => props.pink ? "#fc3c8d" : "#252733"};
    font-weight: ${props => props.strong ? "900" : "600"};
    text-shadow: ${props => props.strong ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : ""};
  }
`;
export { SmallChartContainer };
