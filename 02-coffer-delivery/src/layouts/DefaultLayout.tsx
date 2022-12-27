import React from 'react';

import { LayoutContainer } from './styles';

import Home from '../pages/Home';
import { Header } from '../components/Header';
import Checkout from '../pages/Checkout';

const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Checkout />
    </LayoutContainer>
  );
};

export { DefaultLayout };
