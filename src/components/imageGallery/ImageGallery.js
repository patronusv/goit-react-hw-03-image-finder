import React from 'react';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(item => (
        <ImageGalleryItem image={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
