import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Checkout } from './pages/Checkout';
import { Home } from './pages/Home';
import { Success } from './pages/Success';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="complete" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
