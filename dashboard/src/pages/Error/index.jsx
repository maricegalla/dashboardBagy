import React from 'react';
import { ErrorContentContainer } from './style';
import { ReactComponent as ErrorComponent } from 'src/assets/404.svg';

const Error = () => {
  return <ErrorContentContainer>
    <ErrorComponent />
  </ErrorContentContainer>;
};

export default Error;
