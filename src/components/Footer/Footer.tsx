import React, { memo, FC } from 'react';
import styled from 'styled-components';

const CenteredFooter = styled.div`
width: 100%;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5vh;
margin-top: 5vh;
a {
  color: #5BA02D;
  &:visited {
    color: #5BA02D;
  }
}
`;

export const Footer: FC = memo(function Footer() {
  return (
    <CenteredFooter>
      <span>Made with WebRTC and 💖 by <a href="https://arora-aditya.com" target="_blank" rel="noreferrer">Aditya Arora</a></span>
    </CenteredFooter>
  );
});