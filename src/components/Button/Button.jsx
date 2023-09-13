import React from 'react';
import { StyledButtonDiv, StyledButtonLoad } from './Button.styled';

export const Button = ({ title }) => {
  return (
    <StyledButtonDiv>
      <StyledButtonLoad>{title}</StyledButtonLoad>
    </StyledButtonDiv>
  );
};
