import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import AppRouter from './AppRouter';
import { CarContextProvider } from './context/CartContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CarContextProvider>
        <AppRouter />
      </CarContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
