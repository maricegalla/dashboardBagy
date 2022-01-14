import styled from 'styled-components';

const BigChartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 550px;
  width: 1130px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const LeftSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ChartHeader = styled.div`
  display: flex;
  width: 100%;
  height: 180px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 65px 0 30px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > p {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #9fa2b4;
      font-weight: 500;
      gap: 5px;
    }

    & > h3 {
      font-size: 18px;
      color: #252733;
      font-weight: 600;
      text-align: left;
    }

    & > span {
      font-size: 10px;
      color: #9fa2b4;
      font-weight: 700;
    }
  }

  .rightSide {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
`;

const ChartContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 340px;
  height: 100%;
  border-left: 1px solid #e5e5e5;

  .noBorder {
    border: none !important;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 20px;
    border-bottom: 1px solid #e5e5e5;

    & > p {
      font-size: 12px;
      color: #9fa2b4;
      font-weight: 500;
    }

    & > h2 {
      display: flex;
      align-items: flex-end;
      font-size: 24px;
      color: #252733;
      font-weight: 600;
      text-align: center;
    }

    .underline {
      text-decoration: underline !important;
    }

    .green {
      color: #219653;
    }
  }
`;

export {
  BigChartContainer,
  ChartHeader,
  ChartContainer,
  LeftSectionContainer,
  RightSectionContainer,
};
