import { styled } from '@/styles';

export const ProductContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  maxWidth: 1180,
  alignItems: 'stretch',
  margin: '0 auto',
  gap: '4rem',
  flexDirection: 'row',
});

export const ProductImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%);',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: 576,
  width: '100%',
  height: 656,
  padding: '0.25rem',
  borderRadius: 8,
  img: {
    objectFit: 'cover',
  },
});

export const ProductInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '2rem',
    lineHeight: '140%',
    color: '$gray300',
    marginTop: 16,
  },
  span: {
    marginTop: 16,
    fontSize: '2rem',
    lineHeight: '140%',
    color: '$green300',
  },
  p: {
    marginTop: 40,
    fontSize: '1.125rem',
    lineHeight: 1.6,
    color: '$gray300',
  },
  button: {
    marginTop: 'auto',
    padding: '1.5rem',
    background: '$green500',
    borderRadius: 8,
    color: '$white',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});
