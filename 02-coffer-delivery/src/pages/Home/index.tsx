import React from 'react';
import HomeImage from '../../assets/HomeImage.png';
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react';
import {
  HomeContainer,
  IntoContainer,
  InfoSection,
  Title,
  SubTitle,
  IconContainer,
  BuyInfos,
  BuyInfoDescription,
  InfoImage,
  HomeSubTitle,
  CoffeeList,
} from './styles';
import CoffeeCard from '../../components/CoffeeCard';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <IntoContainer>
        <InfoSection>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>
          <BuyInfos>
            <BuyInfoDescription>
              <IconContainer backgroundColor="yellow-dark">
                <ShoppingCart weight="fill" size={16} />
              </IconContainer>
              <span>Compra simples e segura</span>
            </BuyInfoDescription>
            <BuyInfoDescription>
              <IconContainer backgroundColor="base-text">
                <Package weight="fill" size={16} />
              </IconContainer>
              <span>Embalagem mantém o café intacto</span>
            </BuyInfoDescription>
            <BuyInfoDescription>
              <IconContainer backgroundColor="yellow">
                <Timer weight="fill" size={16} />
              </IconContainer>
              <span>Entrega rápida e rastreada</span>
            </BuyInfoDescription>
            <BuyInfoDescription>
              <IconContainer backgroundColor="purple">
                <Coffee weight="fill" size={16} />
              </IconContainer>
              <span>O café chega fresquinho até você</span>
            </BuyInfoDescription>
          </BuyInfos>
        </InfoSection>
        <InfoImage src={HomeImage} />
      </IntoContainer>
      <HomeSubTitle>Nossos Cafés</HomeSubTitle>
      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeList>
    </HomeContainer>
  );
};

export default Home;
