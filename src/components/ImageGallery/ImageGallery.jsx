import React from 'react';
import { StyledGalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = () => {
  return (
    <StyledGalleryList>
      <ImageGalleryItem />
    </StyledGalleryList>
  );
};
