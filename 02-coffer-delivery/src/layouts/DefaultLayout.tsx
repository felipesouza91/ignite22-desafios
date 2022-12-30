import React from 'react';

import { LayoutContainer } from './styles';
import { Home } from '../pages/Home';
import { Header } from '../components/Header';
import { Checkout } from '../pages/Checkout';
import { Success } from './../pages/Success/index';

const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Success />
    </LayoutContainer>
  );
};

export { DefaultLayout };
