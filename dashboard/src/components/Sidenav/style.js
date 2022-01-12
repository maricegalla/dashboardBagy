import styled from 'styled-components';

const SidenavContainer = styled.div`
  padding-top: 40px;
  height: 100vh;
  background-color: #363740;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: right;
  font-size: 11px;
  font-weight: 400;
  position: fixed;
  z-index: 1;

  .logo {
    margin-bottom: 40px;
  }
  
  a:active, a:focus {
    color: #fff;
    background-color: #463747 !important;
    border: 1px solid #fff;
  }

  & > a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 0 60px;
    width: 100%;
    height: 56px;
    cursor: pointer;
    border: none;
    background-color: #363740;
    color: #a4a6b3;
    text-decoration: none;
  }
`;
export { SidenavContainer };
