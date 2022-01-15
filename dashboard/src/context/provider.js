import React, { useCallback, useEffect } from 'react';
import { node } from 'prop-types';
import Context from './context';

const Provider = ({ children }) => {
  const goToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    return goToTop();
  }, [goToTop]);

  const contextValue = {};

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
