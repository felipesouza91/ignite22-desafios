import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import React from 'react';

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

const Success: React.FC = () => {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                <br /> <strong>Cartão de Crédito</strong>
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
