import React from 'react';
import PropTypes from 'prop-types';
import ImageListItem from './ImageGalleryItemStyled';
const ImageGalleryItem = ({ image }) => {
  return (
    <ImageListItem className="ImageGalleryItem">
      <img src={image.webformatURL} alt={image.tags} data-largeimageurl={image.largeImageURL} className="ImageGalleryItem-image" />
    </ImageListItem>
  );
};

export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
