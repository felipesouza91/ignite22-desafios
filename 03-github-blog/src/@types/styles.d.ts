import 'styled-components';
import { defaultTheme } from '../styles/themes/default';
import { DefaultTheme } from './../../node_modules/.staging/styled-components-69e95a93/native/dist/dist/models/ThemeProvider.d';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
