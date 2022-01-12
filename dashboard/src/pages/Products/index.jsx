import React from 'react';
import { ProductsContentContainer } from './style';
import logoPink from 'src/assets/logoPink.png';

const Products = () => {
  return <ProductsContentContainer>
    <img src={logoPink} alt='logo'/>
      <h1>Produtos</h1>
  </ProductsContentContainer>;
};

export default Products;
