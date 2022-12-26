import React from 'react';

import { LayoutContainer } from './styles';

import Home from '../pages/Home';
import { Header } from '../components/Header';

const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Home />
    </LayoutContainer>
  );
};

export { DefaultLayout };
