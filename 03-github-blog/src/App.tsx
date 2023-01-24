import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

import Home from './pages/Home/index';
import Post from './pages/Post/index';
const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Post />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export { App };
