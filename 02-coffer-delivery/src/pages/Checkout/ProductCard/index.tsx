import React from 'react';

import {
  ProductCardContainer,
  Image,
  Details,
  DetailsSection,
  Title,
  OptionSection,
  Button,
  PriceText,
} from './styles';
import CoffeImage from '../../../assets/Coffee.png';
import QuantityInput from '../../../components/QuantityInput';
import { Trash } from 'phosphor-react';

const ProductCard: React.FC = () => {
  return (
    <ProductCardContainer>
      <Details>
        <Image src={CoffeImage} />
        <DetailsSection>
          <Title>Expresso Tradicional</Title>
          <OptionSection>
            <QuantityInput />
            <Button>
              <Trash size={16} />
              REMOVER
            </Button>
          </OptionSection>
        </DetailsSection>
      </Details>
      <PriceText>R$ 9,90</PriceText>
    </ProductCardContainer>
  );
};

export default ProductCard;
