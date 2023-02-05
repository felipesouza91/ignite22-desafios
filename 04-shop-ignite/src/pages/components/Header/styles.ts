import { styled } from '@/styles';

interface ContainerHeaderProps {
  isCenter: boolean;
}

export const ContainerHeader = styled('header', {
  variants: {
    justifyContent: {
      center: { justifyContent: 'center' },
      spaceBetween: { justifyContent: 'space-between' },
    },
  },
  alignItems: 'center',
  display: 'flex',
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  button: {
    border: 'none',
    cursor: 'pointer',
    background: '$gray800',
    borderRadius: 8,
    padding: 12,
    position: 'relative',
    svg: {
      color: '$gray500',
    },
    div: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: 26,
      height: 26,
      top: '-9px',
      right: '-9px',
      borderRadius: 13,
      background: '$green500',
      border: '3px solid $gray900',
      span: {
        color: '$white',
        fontSize: '0.875rem',
      },
    },
  },
});
