import React from 'react';
import {HeaderContentContainer} from './style';
import lupa from 'src/assets/search.svg';
import news from 'src/assets/new.svg';
import vertical from 'src/assets/vertical.svg';
import photo from 'src/assets/photo.svg';

const Header = ({section}) => {
  return (
    <HeaderContentContainer>
      <span>{section}</span>
      <div>
        <img src={lupa} alt='lupa' />
        <img src={news} alt='news' />
        <img src={vertical} alt='vertical' />
        <p>Matheus Borges</p>
        <img src={photo} alt='user' />
      </div>
    </HeaderContentContainer>
  );
}

export default Header;