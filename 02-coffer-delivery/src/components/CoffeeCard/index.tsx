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
} from './styles';
import QuantityInput from '../QuantityInput';

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
        <QuantityInput />
        <IconButton
          backgroundColor="purple-dark"
          icon={<ShoppingCart size={20} weight="fill" />}
        />
      </Footer>
    </CoffeeCardContainer>
  );
};

export default CoffeeCard;
