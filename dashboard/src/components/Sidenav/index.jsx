import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidenavContainer } from './style';
import { ReactComponent as Logo } from 'src/assets/logo.svg';
import graph from 'src/assets/graph.svg';
import store from 'src/assets/store.svg';
import sales from 'src/assets/sales.svg';
import clients from 'src/assets/clients.svg';
import products from 'src/assets/products.svg';
import plans from 'src/assets/plans.svg';
import config from 'src/assets/config.svg';
import exit from 'src/assets/exit.svg';

const sideNavContent = [
  { name: 'Visão Geral', link: '/', image: graph },
  { name: 'Lojas', link: '/stores', image: store },
  { name: 'Vendas', link: '/sales', image: sales },
  { name: 'Clientes', link: '/clients', image: clients },
  { name: 'Produtos', link: '/products', image: products },
  { name: 'Planos e Metas', link: '/plans', image: plans },
  { name: 'Configurações', link: '/configuration', image: config },
  { name: 'Sair', link: '/exit', image: exit },
];

const Sidenav = () => {
  const location = useLocation();
  const path = location.pathname;

  const setActive = (path) => {
    const elements = document.querySelectorAll('.active');
    if (elements.length >= 1) {
      elements.forEach((element) => element.classList.remove('active'));
      document.getElementById(path).classList.add('active');
    }
    document.getElementById(path).classList.add('active');
  };

  useEffect(() => {
    setActive(path);
  }, [path]);

  return (
    <SidenavContainer>
      <Logo className="logo" />
      {sideNavContent.map((content, index) =>
        content.name === 'Configurações' ? (
          <Link id={content.link} key={index} to={content.link} className="config">
            <img src={content.image} alt={content.name} />
            {content.name}
          </Link>
        ) : (
          <Link id={content.link} key={index} to={content.link}>
            <img src={content.image} alt={content.name} />
            {content.name}
          </Link>
        )
      )}
    </SidenavContainer>
  );
};

export default Sidenav;
