import React, { useState } from 'react';

import { InputContainer } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  sizeType?: 'sm' | 'md' | 'lg';
  isOptional?: boolean;
}

const Input: React.FC<InputProps> = ({
  sizeType = 'lg',
  isOptional,
  ...rest
}) => {
  return (
    <InputContainer sizeType={sizeType} isOptional={isOptional}>
      <input {...rest} />
    </InputContainer>
  );
};

export { Input };
