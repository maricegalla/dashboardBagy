import React, { useEffect, useState } from 'react';
import {
  MediumChartContainer,
  LeftTableContainer,
  TitleContainer,
} from './style';
import { ReactComponent as ArrowDown } from 'src/assets/arrowDown.svg';
import api from 'src/services/api';

const LeftTable = () => {
  const [stores, setStores] = useState([]);

  const getStores = async () => {
    const data = await api.get('/stores');
    const allStores = data.data;
    setStores(allStores);
  };

  useEffect(() => {
    getStores();
  }, []);

  return (
    <MediumChartContainer>
      <div>
        <TitleContainer>
          <div>
            <h3>Total de Compras</h3>
            <p>
              Valor geral:{' '}
              {stores.reduce((total, store) => (total += store.totalIncome), 0)}
              ,00
            </p>
          </div>
          <div>
            <span>
              Semanal
              <ArrowDown />
            </span>
          </div>
        </TitleContainer>
        <LeftTableContainer>
          {stores.map((store, index) =>
            index + 1 < stores.length ? (
              <div key={store.id}>
                <span>{store.name}</span>
                <p>{store.sales} compras</p>
                <p className="right">R$ {store.totalIncome},00</p>
              </div>
            ) : (
              <div key={store.id}>
                <span className="noBorder">{store.name}</span>
                <p className="noBorder">{store.sales} compras</p>
                <p className="noBorder right">R$ {store.totalIncome},00</p>
              </div>
            )
          )}
        </LeftTableContainer>
      </div>
    </MediumChartContainer>
  );
};

export default LeftTable;
