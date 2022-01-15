import React from 'react';
import Sidenav from 'src/components/Sidenav';
import Routes from 'src/Routes'
import './App.css';
import Provider from './context/provider';

const App = () => {
  return (
    <Provider >
      <Sidenav />
      <Routes />
    </Provider>
  );
};

export default App;
