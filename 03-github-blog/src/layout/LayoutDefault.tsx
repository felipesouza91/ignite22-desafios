import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const LayoutDefault: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutDefault;
