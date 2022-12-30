import React from 'react';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <Image src={LogoImg} />
        </Link>
        <HeaderSuffix>
          <Location>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </Location>
          <Link to="/checkout">
            <IconButton
              backgroundColor="yellow-light"
              icon={<ShoppingCart size={22} weight="fill" />}
            />
          </Link>
        </HeaderSuffix>
      </NavContainer>
    </HeaderContainer>
  );
};

export { Header };
