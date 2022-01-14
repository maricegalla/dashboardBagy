import React from 'react';
import Sidenav from 'src/components/Sidenav';
import Routes from 'src/Routes'
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Sidenav />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
