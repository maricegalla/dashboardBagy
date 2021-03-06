import styled from 'styled-components';

const MediumChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 340px;
  width: 550px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;

  & > div {
    overflow-y: scroll;
    width: 100%;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track{
      background-color: #e1e1e1;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb{
      background-color: #f46da6;
      border-radius: 8px;
    }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px !important;

  & div {
    display: flex;
    width: 100%;
    justify-content: space-around;

    & > h3 {
      font-size: 18px;
      color: #252733;
      font-weight: 600;
      width: 80%;
      text-align: center;
    }
  }
`;

const RightTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  .noBorder {
    border: none !important;
  }

  & > div {
    display: flex;
    justify-content: center;
    height: 57px;
    width: 100%;

    & > p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-bottom: 1px solid #e5e5e5;
      font-size: 12px;
      color: #9fa2b4;
      font-weight: 500;
      text-align: right;
    }

    .blue {
      display: flex;
      align-items: center;
      background-color: #2f80ed;
      font-weight: 600;
      width: 80%;
      color: #fff;
      height: 24px;
      justify-content: center;
      padding: 0;
      border-radius: 5px;
    }

    .yellow {
      display: flex;
      align-items: center;
      background-color: #fec400;
      font-weight: 600;
      width: 80%;
      color: #fff;
      height: 24px;
      align-self: center;
      justify-content: center;
      padding: 0;
      border-radius: 5px;
    }
  }
`;

export { MediumChartContainer, RightTableContainer, TitleContainer };
