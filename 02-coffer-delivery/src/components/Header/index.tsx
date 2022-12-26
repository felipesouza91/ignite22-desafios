import React from 'react';
import { MapPin, ShoppingCart } from 'phosphor-react';
import LogoImg from '../../assets/Logo.svg';
import {
  HeaderContainer,
  Image,
  HeaderSuffix,
  Location,
  NavContainer,
} from './styles';
import IconButton from '../IconButton';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Image src={LogoImg} />
        <HeaderSuffix>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>
          <IconButton
            backgroundColor="yellow-light"
            icon={<ShoppingCart size={22} weight="fill" />}
          />
        </HeaderSuffix>
      </NavContainer>
    </HeaderContainer>
  );
};

export { Header };
