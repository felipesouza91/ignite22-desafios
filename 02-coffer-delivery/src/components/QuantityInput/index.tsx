import React from 'react';
import { Minus, Plus } from 'phosphor-react';

import { Input, QuantityInputGroup } from './styles';

const QuantityInput: React.FC = () => {
  return (
    <QuantityInputGroup>
      <button>
        <Minus weight="bold" />
      </button>
      <Input type="input" />
      <button>
        <Plus weight="bold" />
      </button>
    </QuantityInputGroup>
  );
};

export default QuantityInput;
