import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import ImageGalleryWrapper from './ImageGalleryStyled';
const ImageGallery = ({ images, openInModal }) => {
  return (
    <ImageGalleryWrapper>
      <ul className="ImageGallery" onClick={openInModal}>
        {images.map((item, idx) => (
          <ImageGalleryItem image={item} key={`${item.id}${idx}`} />
        ))}
      </ul>
    </ImageGalleryWrapper>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openInModal: PropTypes.func.isRequired,
};
