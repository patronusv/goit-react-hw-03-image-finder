import React from 'react';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ images, openInModal }) => {
  return (
    <ul className="ImageGallery" onClick={openInModal}>
      {images.map(item => (
        <ImageGalleryItem image={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
