import React, { useContext, useState } from 'react';
import ProductCard from './ProductCard';
import { CarContext, PaymentType } from './../../context/CartContext';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PaymentForm from './PaymentForm';
import * as zod from 'zod';
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
import { useNavigate } from 'react-router-dom';

const schema = zod.object({
  cep: zod.string().max(8),
  rua: zod.string().min(10),
  numero: zod.number(),
  complemento: zod.string().optional(),
  bairro: zod.string().min(2),
  cidade: zod.string().min(2),
  estado: zod.string().min(2),
});
type checkoutFormData = zod.infer<typeof schema>;

const Checkout: React.FC = () => {
  const { carItens, checkoutInfo, finishCheckout } = useContext(CarContext);
  const [paymentMethod, setPaymentMethod] = useState<PaymentType | null>(null);
  const checkoutForm = useForm<checkoutFormData>({
    resolver: zodResolver(schema),
  });
  const totalProductValue = carItens.reduce(
    (total, item) => (total += item.coffee.price * item.quantity),
    0
  );
  const navigate = useNavigate();
  const deliveryPrice = 3.5;
  const totalCheckout = totalProductValue + deliveryPrice;
  const { handleSubmit, reset, formState } = checkoutForm;

  function handleSaveCart(data: checkoutFormData) {
    if (paymentMethod != null) {
      finishCheckout({ ...data, paymentMethod });
      navigate('/complete');
    }
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
          <Button
            type="submit"
            disabled={!formState.isValid || paymentMethod === null}
          >
            CONFIRMAR PEDIDO
          </Button>
        </ResumeCard>
      </CheckoutResume>
    </CheckoutContainer>
  );
};

export { Checkout };
