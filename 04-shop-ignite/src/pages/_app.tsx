import type { AppProps } from 'next/app';
import { globalStyles } from './../styles/global';
import { Container } from '@/styles/pages/app';
import { Roboto } from '@next/font/google';

import CartProvider, { CartContext } from '@/context/CartContext';
import Header from './components/Header';

export const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--roboto-font',
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Container className={roboto.className}>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
