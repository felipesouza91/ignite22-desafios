import React, { useContext, useState } from 'react';
import ProductCard from './ProductCard';
import { CarContext } from './../../context/CartContext';
import { FormProvider, useForm } from 'react-hook-form';
import PaymentForm from './PaymentForm';

import {
  CheckoutContainer,
  Title,
  CheckoutResume,
  ResumeCard,
  ProductWrapper,
  PricesDescription,
  TotalItemValueText,
  DeliveryValueText,
  TotalText,
  Button,
} from './styles';

export type PaymentType = 'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY' | null;

const Checkout: React.FC = () => {
  const { carItens } = useContext(CarContext);
  const checkoutForm = useForm();
  const totalProductValue = carItens.reduce(
    (total, item) => (total += item.coffee.price * item.quantity),
    0
  );
  const deliveryPrice = 3.5;
  const totalCheckout = totalProductValue + deliveryPrice;
  const { handleSubmit, reset, watch } = checkoutForm;
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>(null);

  function handleSaveCart(data: any) {
    console.log({ ...data, paymentMethod });
  }

  function handleUpdatePayment(value: PaymentType) {
    setPaymentMethod(value);
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleSaveCart)}>
      <FormProvider {...checkoutForm}>
        <PaymentForm
          paymentValue={paymentMethod}
          onChangePayment={handleUpdatePayment}
        />
      </FormProvider>
      <CheckoutResume>
        <Title>Cafés selecionados</Title>
        <ResumeCard>
          {carItens.length > 0 &&
            carItens.map((item) => (
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
