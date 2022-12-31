import React, { ButtonHTMLAttributes } from 'react';
import { IconButtonContainer } from './styles';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  backgroundColor: 'yellow-light' | 'purple-dark';
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  backgroundColor,
  ...rest
}) => {
  return (
    <IconButtonContainer bgColor={backgroundColor} {...rest}>
      {icon}
    </IconButtonContainer>
  );
};

export default IconButton;
