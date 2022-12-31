import React, { useContext, useState } from 'react';
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
import { CarContext } from '../../context/CartContext';
interface CoffeeCardProps {
  data: {
    id: string;
    imgUrl: string;
    type: string[];
    name: string;
    description: string;
    price: number;
  };
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCar } = useContext(CarContext);

  function handleUpdateQuantity(value: number) {
    setQuantity(value);
  }

  function handleAddToCart() {
    addItemToCar({
      coffee: data,
      quantity,
    });
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
          onClick={handleAddToCart}
          backgroundColor="purple-dark"
          icon={<ShoppingCart size={20} weight="fill" />}
        />
      </Footer>
    </CoffeeCardContainer>
  );
};

export default CoffeeCard;
