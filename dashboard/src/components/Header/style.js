import styled from 'styled-components';

const HeaderContentContainer = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  z-index: -1;
  height: 80px;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #252733;
    font-size: 12px;
  }
`;

export { HeaderContentContainer };
