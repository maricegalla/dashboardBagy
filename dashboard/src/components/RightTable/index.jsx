import React, { useContext } from 'react';
import {
  MediumChartContainer,
  RightTableContainer,
  TitleContainer,
} from './style';
import Context from 'src/context/context';

const headerContent = [
  { title: 'Produto' },
  { title: 'Loja' },
  { title: 'Preço' },
  { title: 'Data' },
];

const RightTable = () => {
  const { stores, products } = useContext(Context);

  return (
    <MediumChartContainer>
      <div>
        <TitleContainer>
          <div>
            {headerContent.map((header, index) => (
              <h3 key={index}>{header.title}</h3>
            ))}
          </div>
        </TitleContainer>
        <RightTableContainer>
          {products.map((product, index) =>
            index + 1 < products.length ? (
              <div key={product.id}>
                <p>
                  {product.productName} {product.productId}
                </p>
                {stores.map((store, index) => {
                  if (store.id === product.storeId) {
                    return <p key={index}>{store.name}</p>;
                  }
                  return '';
                })}
                <p>
                  <span className="blue">R$ {product.productPrice}</span>
                </p>
                <p>
                  <span className="yellow">{product.date}</span>
                </p>
              </div>
            ) : (
              <div key={product.id}>
                <p className="noBorder">
                  {product.productName} {product.productId}
                </p>
                {stores.map((store, index) => {
                  if (store.id === product.storeId) {
                    return (
                      <p key={index} className="noBorder">
                        {store.name}
                      </p>
                    );
                  }
                  return '';
                })}
                <p className="noBorder">
                  <button className=" blue">R$ {product.productPrice}</button>
                </p>
                <p className="noBorder">
                  <button className="yellow">{product.date}</button>
                </p>
              </div>
            )
          )}
        </RightTableContainer>
      </div>
    </MediumChartContainer>
  );
};

export default RightTable;
