import React, { InputHTMLAttributes, useState } from 'react';
import { Minus, Plus } from 'phosphor-react';

import { Input, QuantityInputGroup } from './styles';

interface QuantityInputProps extends InputHTMLAttributes<HTMLInputElement> {
  updateQuantity: (data: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  value,
  updateQuantity,
  ...rest
}) => {
  function handlePlus() {
    updateQuantity(Number(value) + 1);
  }

  function handleMinus() {
    if (value! != 1) {
      updateQuantity(Number(value) - 1);
    }
  }

  return (
    <QuantityInputGroup>
      <button onClick={handleMinus}>
        <Minus weight="bold" />
      </button>
      <Input
        type="input"
        value={value}
        onChange={(e) => updateQuantity(Number.parseInt(e.target.value))}
        {...rest}
      />
      <button onClick={handlePlus}>
        <Plus weight="bold" />
      </button>
    </QuantityInputGroup>
  );
};

export default QuantityInput;
