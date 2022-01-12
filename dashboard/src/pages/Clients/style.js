import styled from 'styled-components';

const ClientsContentContainer = styled.div`
  padding-left: 260px;
  height: 100vh;
  width: 100vw;

  .baggy {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    color: #e55c8b;
    font-weight: 700;

    img {
      width: 20%;
    }
  }
`;

export { ClientsContentContainer };
