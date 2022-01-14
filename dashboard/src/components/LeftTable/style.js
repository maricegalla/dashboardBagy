import styled from 'styled-components';

const MediumChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 340px;
  width: 550px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 5px;
`;

const LeftTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  table-layout: auto;

  .noBorder {
    border: none !important;
  }

  & > div {
    display: flex;
    justify-content: center;
    height: 57px;
    width: 100%;
    
    & > span {
      display: flex;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid #e5e5e5;
      font-size: 14px;
      padding-left: 30px;
      color: #252733;
      font-weight: 500;
      text-align: left;
    }

    & > p {
      display: flex;
      align-items: center;
      justify-content: right;
      width: 100%;
      border-bottom: 1px solid #e5e5e5;
      font-size: 14px;
      padding-right: 20px;
      color: #9fa2b4;
      font-weight: 500;
      text-align: right;
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px !important;
  

  & div {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;

    & > h3 {
      font-size: 18px;
      color: #252733;
      font-weight: 600;
      padding-left: 30px;
    }

    & > p {
      font-size: 13px;
      color: #2f80ed;
      font-weight: 600;
      padding-left: 30px;
    }

    & > span {
      font-size: 14px;
      color: #fc3c8d;
      font-weight: 500;
      text-align: right;
      text-decoration: underline;
      padding-right: 20px;
    }
  }
`;

export { MediumChartContainer, LeftTableContainer, TitleContainer };
