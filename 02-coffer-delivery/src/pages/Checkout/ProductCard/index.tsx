import React, { useContext, useState } from 'react';

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
import QuantityInput from '../../../components/QuantityInput';
import { Trash } from 'phosphor-react';
import { CarContext, Item } from '../../../context/CartContext';

interface ProductCartProps {
  data: Item;
}

const ProductCard: React.FC<ProductCartProps> = ({ data }) => {
  const [quantity, setQuantity] = useState(data.quantity);
  const { addItemToCar } = useContext(CarContext);

  function handleUpdateQuantity(value: number) {
    setQuantity(value);
    addItemToCar({
      coffee: data.coffee,
      quantity: value - data.quantity,
    });
  }

  return (
    <ProductCardContainer>
      <Details>
        <Image src={data.coffee.imgUrl} />
        <DetailsSection>
          <Title>{data.coffee.name}</Title>
          <OptionSection>
            <QuantityInput
              value={quantity}
              updateQuantity={handleUpdateQuantity}
            />
            <Button>
              <Trash size={16} />
              REMOVER
            </Button>
          </OptionSection>
        </DetailsSection>
      </Details>
      <PriceText>R$ {data.coffee.price.toFixed(2)}</PriceText>
    </ProductCardContainer>
  );
};

export default ProductCard;
