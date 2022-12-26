import React from 'react';
import IconButton from './../IconButton/index';
import { ShoppingCart, Plus, Minus } from 'phosphor-react';
import CoffeeImg from '../../assets/Coffee.png';
import {
  CoffeeCardContainer,
  CardImage,
  CoffeeType,
  Title,
  Description,
  Footer,
  Price,
  QuantityInputGroup,
  QuantityInput,
} from './styles';

const CoffeeCard: React.FC = () => {
  return (
    <CoffeeCardContainer>
      <CardImage src={CoffeeImg} />
      <CoffeeType>TRADICIONAL</CoffeeType>
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <Footer>
        <Price>
          <span>R$</span> 9,90
        </Price>
        <QuantityInputGroup>
          <button>
            <Minus weight="bold" />
          </button>
          <QuantityInput type="input" />
          <button>
            <Plus weight="bold" />
          </button>
        </QuantityInputGroup>
        <IconButton
          backgroundColor="purple-dark"
          icon={<ShoppingCart size={20} weight="fill" />}
        />
      </Footer>
    </CoffeeCardContainer>
  );
};

export default CoffeeCard;
