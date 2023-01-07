import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import React, { useContext } from 'react';

import {
  SuccessContainer,
  Informations,
  Title,
  SubTitle,
  DescriptionContainer,
  DescriptionContainerWrapper,
  SubDescriptionGroup,
  IconWrapper,
  Image,
} from './styles';

import DeliveryManImage from './../../assets/DeliveryMan.png';
import { CarContext } from '../../context/CartContext';

const PAYMENT = {
  CREDIT_CARD: 'Cartão de Credito',
  DEBIT_CARD: 'Cartão de Debito',
  MONEY: 'Dinheiro',
};

const Success: React.FC = () => {
  const { checkoutInfo } = useContext(CarContext);
  return (
    <SuccessContainer>
      <Informations>
        <Title>Uhu! Pedido confirmado</Title>
        <SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </SubTitle>
        <DescriptionContainerWrapper>
          <DescriptionContainer>
            <SubDescriptionGroup>
              <IconWrapper colorType="purple">
                <MapPin weight="fill" />
              </IconWrapper>
              <span>
                Entrega em{' '}
                <strong>{`${checkoutInfo.rua}, ${checkoutInfo.numero}` }</strong>
                <br />
                {checkoutInfo.bairro} - {checkoutInfo.cidade},
                {checkoutInfo.estado.toUpperCase()}
              </span>
            </SubDescriptionGroup>
            <SubDescriptionGroup>
              <IconWrapper colorType="yellow">
                <Timer weight="fill" />
              </IconWrapper>
              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            </SubDescriptionGroup>
            <SubDescriptionGroup>
              <IconWrapper colorType="yellow-dark">
                <CurrencyDollar />
              </IconWrapper>
              <span>
                Pagamento na entrega
                <br /> <strong>{PAYMENT[checkoutInfo.paymentMethod]}</strong>
              </span>
            </SubDescriptionGroup>
          </DescriptionContainer>
        </DescriptionContainerWrapper>
      </Informations>
      <Image src={DeliveryManImage} />
    </SuccessContainer>
  );
};

export { Success };
