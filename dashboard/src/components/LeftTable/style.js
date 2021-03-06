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
    ::-webkit-scrollbar-track {
      background-color: #e1e1e1;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #f46da6;
      border-radius: 8px;
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  padding: 20px 0;

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

const LeftTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .noBorder {
    border: none !important;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    font-size: 14px;
    color: #9fa2b4;
    font-weight: 500;
    padding-right: 20px;
  }

  & > div {
    display: flex;
    justify-content: center;
    height: 57px;
    width: 100%;
  }

  span {
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

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
    font-size: 14px;
    color: #9fa2b4;
    font-weight: 500;
  }
`;

export { MediumChartContainer, LeftTableContainer, TitleContainer };
