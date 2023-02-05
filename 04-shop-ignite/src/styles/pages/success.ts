import { styled } from '@/styles';

export const SuccessContainer = styled('div', {
  margin: '0 auto',
  height: 700,
  maxWidth: 590,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  h1: {
    fontWeight: 'bold',
    fontSize: '2rem',
    lineHeight: 1.4,
    color: '$gray100',
    marginBottom: '4rem',
  },
  p: {
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: 1.4,
    color: '$gray300',
    textAlign: 'center',
    marginBottom: '88px',
  },
  a: {
    textDecoration: 'none',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '1,25rem',
  },
});

export const ImageBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '19px 7px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 1000,
  width: 140,
  height: 140,
  marginBottom: '2rem',
  img: {
    objectFit: 'cover',
  },
});

export const ImageList = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  marginLeft: '-58px',

  div: {
    marginRight: '-58px',
  },
});
