import React from 'react';
import { Link } from 'react-router-dom';
import { SidenavContainer } from './style';
import { ReactComponent as Logo } from 'src/assets/logo.svg';
import graph from 'src/assets/graph.svg';
import store from 'src/assets/store.svg';
import sales from 'src/assets/sales.svg';
import clients from 'src/assets/clients.svg';
import products from 'src/assets/products.svg';
import plans from 'src/assets/plans.svg';
import config from 'src/assets/config.svg';

const sideNavContent = [
  { name: 'Visão Geral', link: '/', image: graph },
  { name: 'Lojas', link: '/stores', image: store },
  { name: 'Vendas', link: '/sales', image: sales },
  { name: 'Clientes', link: '/clients', image: clients },
  { name: 'Produtos', link: '/products', image: products },
  { name: 'Planos e Metas', link: '/plans', image: plans },
  { name: 'Configurações', link: '/configuration', image: config },
];

const Sidenav = () => {
  return (
    <SidenavContainer>
      <Logo className="logo" />
      {sideNavContent.map((content, index) => (
        <Link id={content.link} key={index} to={content.link}>
          <img src={content.image} alt={content.name} />
          {content.name}
        </Link>
      ))}
    </SidenavContainer>
  );
};

export default Sidenav;
