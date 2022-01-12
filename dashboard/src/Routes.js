import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Stores from './pages/Stores';
import Sales from './pages/Sales';
import Clients from './pages/Clients';
import Products from './pages/Products';
import PlansAndGoals from './pages/Plans'
import Configuration from './pages/Configuration'
import Exit from './pages/Exit';
import Error from './pages/Error';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/stores" element={<Stores />} />
      <Route exact path="/sales" element={<Sales />} />
      <Route exact path="/clients" element={<Clients />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/plans" element={<PlansAndGoals />} />
      <Route exact path="/configuration" element={<Configuration />} />
      <Route exact path="/exit" element={<Exit />} />
      <Route path="*" element={<Error />} />
    </Switch>
  );
}

export default Routes;