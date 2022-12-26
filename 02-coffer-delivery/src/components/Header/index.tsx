import React from 'react';
import { MapPin, ShoppingCart } from 'phosphor-react';
import LogoImg from '../../assets/Logo.svg';
import {
  HeaderContainer,
  Image,
  HeaderSuffix,
  Location,
  NavContainer,
  IconButton,
} from './styles';

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
          <IconButton>
            <ShoppingCart size={22} weight="fill" />
          </IconButton>
        </HeaderSuffix>
      </NavContainer>
    </HeaderContainer>
  );
};

export { Header };
