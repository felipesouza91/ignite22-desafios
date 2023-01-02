import React, { useContext } from 'react';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from 'phosphor-react';
import { Input } from '../../components/Input';
import ProductCard from './ProductCard';
import { CarContext } from './../../context/CartContext';
import {
  CheckoutContainer,
  CheckoutInfos,
  Title,
  AddressInfo,
  MessageGroup,
  SubTitleGroup,
  SubTitle,
  Text,
  AddressForm,
  InlineGroup,
  PaymentInfo,
  PaymentMessageGroup,
  PaymentOptions,
  PaymentOption,
  CheckoutResume,
  ResumeCard,
  ProductWrapper,
  PricesDescription,
  TotalItemValueText,
  DeliveryValueText,
  TotalText,
  Button,
} from './styles';

const Checkout: React.FC = () => {
  const { carItens } = useContext(CarContext);
  const totalProductValue = carItens.reduce(
    (total, item) => (total += item.coffee.price * item.quantity),
    0
  );
  const deliveryPrice = 3.5;
  const totalCheckout = totalProductValue + deliveryPrice;
  return (
    <CheckoutContainer>
      <CheckoutInfos>
        <Title>Complete seu pedido</Title>
        <AddressInfo>
          <MessageGroup>
            <MapPin size={22} />
            <SubTitleGroup>
              <SubTitle>Endereço de Entrega</SubTitle>
              <Text>Informe o endereço onde deseja receber seu pedido</Text>
            </SubTitleGroup>
          </MessageGroup>
          <AddressForm>
            <Input sizeType="md" placeholder="CEP" />
            <Input placeholder="Rua" />
            <InlineGroup>
              <Input placeholder="Número" sizeType="md" />
              <Input placeholder="Complemento" isOptional />
            </InlineGroup>
            <InlineGroup>
              <Input placeholder="Bairro" sizeType="md" />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" sizeType="sm" />
            </InlineGroup>
          </AddressForm>
        </AddressInfo>
        <PaymentInfo>
          <PaymentMessageGroup>
            <CurrencyDollar size={22} />
            <SubTitleGroup>
              <SubTitle>Pagamento</SubTitle>
              <Text>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </Text>
            </SubTitleGroup>
          </PaymentMessageGroup>
          <PaymentOptions>
            <PaymentOption>
              <CreditCard size={16} />
              CARTÃO DE CREDITO
            </PaymentOption>
            <PaymentOption>
              <Bank size={16} />
              CARTÃO DE CREDITO
            </PaymentOption>
            <PaymentOption isSelected>
              <Money size={16} />
              CARTÃO DE CREDITO
            </PaymentOption>
          </PaymentOptions>
        </PaymentInfo>
      </CheckoutInfos>
      <CheckoutResume>
        <Title>Cafés selecionados</Title>
        <ResumeCard>
          {carItens.map((item) => (
            <ProductWrapper key={item.coffee.id}>
              <ProductCard data={item} />
            </ProductWrapper>
          ))}
          <PricesDescription>
            <TotalItemValueText>
              <span>Total de itens</span>
              <span>
                {Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalProductValue)}
              </span>
            </TotalItemValueText>
            <DeliveryValueText>
              <span>Entrega</span>
              <span>
                {Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(deliveryPrice)}
              </span>
            </DeliveryValueText>
            <TotalText>
              <span>Total</span>
              <span>
                {Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalCheckout)}
              </span>
            </TotalText>
          </PricesDescription>
          <Button>CONFIRMAR PEDIDO</Button>
        </ResumeCard>
      </CheckoutResume>
    </CheckoutContainer>
  );
};

export { Checkout };
