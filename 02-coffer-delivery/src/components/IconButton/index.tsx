import React, { ButtonHTMLAttributes } from 'react';
import { IconButtonContainer, IconButtonWrapper } from './styles';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  bagdeText?: number;
  backgroundColor: 'yellow-light' | 'purple-dark';
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  backgroundColor,
  bagdeText,
  ...rest
}) => {
  return (
    <IconButtonWrapper>
      <IconButtonContainer bgColor={backgroundColor} {...rest}>
        {icon}
      </IconButtonContainer>
      {bagdeText! > 0 && (
        <div>
          <span>{bagdeText}</span>
        </div>
      )}
    </IconButtonWrapper>
  );
};

export default IconButton;
