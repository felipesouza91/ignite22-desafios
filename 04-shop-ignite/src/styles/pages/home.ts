import { styled } from '@/styles';

const HomeContainer = styled('div', {
  display: 'flex',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
});

const Product = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%);',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: 656,

  cursor: 'pointer',
  width: 696,
  borderRadius: 8,
  overflow: 'hidden',
  img: {
    objectFit: 'cover',
  },
  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    background: 'rgba(32, 32, 36, 0.9);',
    borderRadius: 8,
    padding: '2rem 2.5rem 2rem 2rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    div: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    strong: {
      fontSize: '1.25rem',
      lineHeight: '160%',
      color: '$gray100',
    },
    span: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '$green300',
      lineHeight: '130%',
    },
    button: {
      cursor: 'pointer',
      border: 'none',
      padding: 12,
      background: '$green500',
      borderRadius: 6,
      svg: {
        color: '$white',
      },
    },
    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
});

export { HomeContainer, Product };
