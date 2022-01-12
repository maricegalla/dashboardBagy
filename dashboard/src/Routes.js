import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Main from './pages/Main';


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Main />} />
    </Switch>
  );
}

export default Routes;