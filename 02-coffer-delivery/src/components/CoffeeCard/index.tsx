import React, { useState } from 'react';
import IconButton from './../IconButton/index';
import { ShoppingCart, Plus, Minus } from 'phosphor-react';
import CoffeeImg from '../../assets/Coffee.png';
import {
  CoffeeCardContainer,
  CardImage,
  CoffeeTypeRow,
  CoffeeType,
  Title,
  Description,
  Footer,
  Price,
} from './styles';
import QuantityInput from '../QuantityInput';
interface CoffeeCardProps {
  data: {
    id: string;
    imgUrl: string;
    type: string[];
    name: string;
    description: string;
    price: number;
  };
  onAdd: (data: any) => void;
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ data, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  function handleUpdateQuantity(value: number) {
    setQuantity(value);
  }

  return (
    <CoffeeCardContainer>
      <CardImage src={data.imgUrl} />
      <CoffeeTypeRow>
        {data.type.map((type) => (
          <CoffeeType key={type}>{type}</CoffeeType>
        ))}
      </CoffeeTypeRow>
      <Title>{data.name}</Title>
      <Description>{data.description}</Description>
      <Footer>
        <Price>
          <span>R$</span> {data.price.toFixed(2)}
        </Price>
        <QuantityInput value={quantity} updateQuantity={handleUpdateQuantity} />
        <IconButton
          onClick={() => onAdd({ id: data.id, quantity })}
          backgroundColor="purple-dark"
          icon={<ShoppingCart size={20} weight="fill" />}
        />
      </Footer>
    </CoffeeCardContainer>
  );
};

export default CoffeeCard;
