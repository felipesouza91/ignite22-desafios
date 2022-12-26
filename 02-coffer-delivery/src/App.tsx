import { Header } from './components/Header';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import Home from './pages/Home';
import { DefaultLayout } from './layouts/DefaultLayout';
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
