import {
  Bank,
  Cardholder,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from 'phosphor-react';
import React from 'react';
import { Input } from '../../components/Input';
import ProductCard from './ProductCard';
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
          <ProductWrapper>
            <ProductCard />
          </ProductWrapper>
          <ProductWrapper>
            <ProductCard />
          </ProductWrapper>
          <ProductWrapper>
            <ProductCard />
          </ProductWrapper>
          <PricesDescription>
            <TotalItemValueText>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </TotalItemValueText>
            <DeliveryValueText>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </DeliveryValueText>
            <TotalText>
              <span>Total</span>
              <span>R$ 33,20</span>
            </TotalText>
          </PricesDescription>
          <Button>CONFIRMAR PEDIDO</Button>
        </ResumeCard>
      </CheckoutResume>
    </CheckoutContainer>
  );
};

export { Checkout };
