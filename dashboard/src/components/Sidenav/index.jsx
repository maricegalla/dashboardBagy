import React from 'react';
import { SidenavContainer } from './style';
import { ReactComponent as Logo } from 'src/assets/logo.svg';

const sideNavContent = [
  { name: 'Visão Geral' },
  { name: 'Vendas' },
  { name: 'Clientes' },
  { name: 'Produtos' },
  { name: 'Planos e Metas' },
  { name: 'Configurações' },
  { name: 'Sair' },
];

const Sidenav = () => {
  return (
    <SidenavContainer>
      <Logo />
      {sideNavContent.map((content)=>(
        <p>{content.name}</p>
      ))}
    </SidenavContainer>
  );
};

export default Sidenav;
