import React from 'react';
import styled from 'styled-components';

import { Button } from '../Button/Button';

import logo from '../../assets/logo.svg';

const LogoPlay = styled.div`
  width: 95%;
  margin-left: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5vh 2vw 2vh 2vw;
  img {
    max-width: 200px;
  }
`;

interface HeaderProps {
  onClickButton: () => any;
  hideButton: boolean;
}

export function Header({
  onClickButton,
  hideButton,
}: HeaderProps) {
  return (
    <LogoPlay>
      <a href="/"><img src={logo} alt="logo"/></a>
      <Button hide={hideButton} onClick={onClickButton}>Play Now</Button>
    </LogoPlay>
  );
};