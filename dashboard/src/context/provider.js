import React, { useCallback, useEffect, useState } from 'react';
import { node } from 'prop-types';
import Context from './context';
import api from 'src/services/api';

const Provider = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [info, setInfo] = useState({});
  const [choice, setChoice] = useState("");
  const [width, setWidth] = useState("130px");

  const getStores = async () => {
    const data = await api.get('/stores');
    const allStores = data.data;
    setStores(allStores);
  };

  const getProducts = async () => {
    const data = await api.get('/products');
    const allProducts = data.data;
    setProducts(allProducts);
  };

  const getData = async () => {
    const data = await api.get('/chartData');
    const allData = data.data;
    setChartData(allData);
  };

  const getInfo = async () => {
    const data = await api.get('/mainInfo');
    const allInfo = data.data;
    setInfo(allInfo[0]);
  };

  const goToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    goToTop();
    getStores();
    getProducts();
    getData();
    getInfo();
  }, [goToTop]);

  const contextValue = {
    stores,
    products,
    chartData,
    info,
    choice,
    setChoice,
    width,
    setWidth,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: node,
}.isRequired;

export default Provider;
