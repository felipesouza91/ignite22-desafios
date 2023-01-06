import React, { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from 'phosphor-react';

import {
  Title,
  CheckoutInfos,
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
} from './styles';
import { InputContainer } from '../styles';
import { PaymentType } from '../index';
interface PaymentFormProp {
  paymentValue: PaymentType;
  onChangePayment: (value: PaymentType) => void;
}

const PaymentForm: React.FC<PaymentFormProp> = ({
  onChangePayment,
  paymentValue,
}) => {
  const { register } = useFormContext();
  return (
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
          <InputContainer sizeType="md">
            <input placeholder="CEP" {...register('cep')} />
          </InputContainer>
          <InputContainer sizeType="lg">
            <input placeholder="Rua" {...register('rua')} />
          </InputContainer>

          <InlineGroup>
            <InputContainer sizeType="md">
              <input placeholder="Número" {...register('numero')} />
            </InputContainer>
            <InputContainer sizeType="lg">
              <input placeholder="Complemento" {...register('complemento')} />
            </InputContainer>
          </InlineGroup>
          <InlineGroup>
            <InputContainer sizeType="md">
              <input placeholder="Bairro" {...register('bairro')} />
            </InputContainer>
            <InputContainer sizeType="lg">
              <input placeholder="Cidade" {...register('cidade')} />
            </InputContainer>
            <InputContainer sizeType="sm">
              <input placeholder="UF" {...register('estado')} />
            </InputContainer>
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
          <PaymentOption
            type="button"
            isSelected={paymentValue === 'CREDIT_CARD'}
            onClick={() => onChangePayment('CREDIT_CARD')}
          >
            <CreditCard size={16} />
            CARTÃO DE CREDITO
          </PaymentOption>
          <PaymentOption
            type="button"
            isSelected={paymentValue === 'DEBIT_CARD'}
            onClick={() => onChangePayment('DEBIT_CARD')}
          >
            <Bank size={16} />
            CARTÃO DE DÉBITO
          </PaymentOption>
          <PaymentOption
            type="button"
            isSelected={paymentValue === 'MONEY'}
            onClick={() => onChangePayment('MONEY')}
          >
            <Money size={16} />
            DINHEIRO
          </PaymentOption>
        </PaymentOptions>
      </PaymentInfo>
    </CheckoutInfos>
  );
};

export default PaymentForm;
