import styled from 'styled-components';

type ButtonProps = {
  hide?: boolean;
};

export const Button = styled.button<ButtonProps>`
  background-color: black;
  color: white;
  outline: none;
  border: none;
  padding: 1vh 2vh;
  font-size: 1.5vh;
  display: ${props => props.hide ? "none" : "default"}
`;
