import React from 'react';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import ImageGalleryWrapper from './ImageGalleryStyled';
const ImageGallery = ({ images, openInModal }) => {
  return (
    <ImageGalleryWrapper>
      <ul className="ImageGallery" onClick={openInModal}>
        {images.map(item => (
          <ImageGalleryItem image={item} key={item.id} />
        ))}
      </ul>
    </ImageGalleryWrapper>
  );
};

export default ImageGallery;
