import React from 'react';
import { IconButtonContainer } from './styles';

interface IconButtonProps {
  icon: React.ReactElement;
  backgroundColor: 'yellow-light' | 'purple-dark';
}

const IconButton: React.FC<IconButtonProps> = ({ icon, backgroundColor }) => {
  return (
    <IconButtonContainer bgColor={backgroundColor}>{icon}</IconButtonContainer>
  );
};

export default IconButton;
