import React from 'react';
import { ProductsContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';
import Header from 'src/components/Header';

const Products = () => {
  return (
    <ProductsContentContainer>
      <Header section={'Produtos'} />
      <div className={'baggy'}>
        <img src={logoPink} alt="logo" />
        <h1>Produtos</h1>
      </div>
    </ProductsContentContainer>
  );
};

export default Products;
