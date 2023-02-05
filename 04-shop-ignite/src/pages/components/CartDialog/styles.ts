import { styled } from '@/styles';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgb(0, 0, 0, 0.75)',
});

export const Content = styled(Dialog.Content, {
  background: '$gray800',
  minWidth: '32rem',
  height: '100vh',
  borderRadius: 6,
  padding: '2.5rem 3rem',
  position: 'fixed',
  top: 0,
  right: 0,
});

export const Close = styled(Dialog.Close, {
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',
  position: 'absolute',
  lineHeight: 0,
  right: 24,
  top: 24,
});

export const CartContainer = styled('div', {
  marginTop: 24,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '100%',
});
export const Title = styled('span', {
  marginBottom: 32,
  fontWeight: '700',
  fontSize: '1.25rem',
  lineHeight: 1.6,
  color: '$gray100',
});

export const CartItensContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  maxHeight: '65%',
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
});

export const CartItem = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 20,
});

export const CartImageContainer = styled('div', {
  width: 100,
  height: 98,
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%);',
  img: {
    boxSizing: 'cover',
  },
});

export const CartItemInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  span: {
    fontSize: '1.125rem',
    color: '$gray300',
    lineHeight: 1.6,
  },
  strong: {
    fontSize: '1.125rem',
    color: '$gray100',
    lineHeight: 1.6,
  },
  button: {
    marginTop: 8,
    background: 'transparent',
    border: 'none',
    color: '$green500',
    cursor: 'pointer',
  },
});

export const CartValueContainer = styled('div', {
  marginTop: 'auto',
  display: 'flex',
  width: '100%',
  gap: 8,
  flexDirection: 'column',
});

export const QuantityContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  span: {
    fontWeight: 400,
    lineHeight: 1.6,
    color: '$gray1000',
  },
  '& > span:last-child': {
    fontWeight: 'bold',
    lineHeight: 1.6,
    color: '$gray1000',
  },
});

export const ValueContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  span: {
    fontSize: '1.125rem',
    fontWeight: 700,
    lineHeight: 1.6,
    color: '$gray1000',
  },
  strong: {
    fontSize: '1.5rem',
    lineHeight: 1.4,
    color: '$gray1000',
  },
});

export const SubmitButton = styled('button', {
  marginTop: 57,
  width: '100%',

  height: 69,
  border: 'none',
  background: '$green500',
  color: '$white',
  borderRadius: 8,
  cursor: 'pointer',
  fontSize: '1.125rem',
});
