import React from 'react';
import { node } from 'prop-types';
import Context from './context';


function Provider({ children }) {
  
  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
