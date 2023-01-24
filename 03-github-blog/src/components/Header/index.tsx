import React from 'react';

import { HeaderContainer, EffectImg, LogoImg } from './styles';
import effect from '../../assets/effect.svg';
import effect1 from '../../assets/effect-1.svg';
import Logo from '../../assets/Logo.svg';
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <EffectImg src={effect} />
      <LogoImg src={Logo} />
      <EffectImg src={effect1} />
    </HeaderContainer>
  );
};

export default Header;
