import React from 'react';
import {
  StyledForm,
  StyledFormBtnSpan,
  StyledFormButton,
  StyledFormInput,
  StyledHeader,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <StyledHeader>
      <StyledForm>
        <StyledFormButton type="submit">
          <StyledFormBtnSpan>Search</StyledFormBtnSpan>
        </StyledFormButton>

        <StyledFormInput
          type="text"
          autoComplete="off"
          autoFocus={true}
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledHeader>
  );
};
