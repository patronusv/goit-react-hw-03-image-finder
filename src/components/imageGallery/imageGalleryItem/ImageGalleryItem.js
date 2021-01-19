import React from 'react';
const ImageGalleryItem = ({ image }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={image.webformatURL} alt={image.tags} data-largeimageurl={image.largeImageURL} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
