import { globalCss } from '@/styles';
import { roboto } from './../pages/_app';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    background: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
  'body, button, input, textarea': {
    fontFamily: 'var(--roboto-font)',
    fontWeight: 'bold',
  },
});
