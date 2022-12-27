import { MapPin } from 'phosphor-react';
import React from 'react';
import { Input } from '../../components/Input';
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
      </CheckoutInfos>
    </CheckoutContainer>
  );
};

export default Checkout;
