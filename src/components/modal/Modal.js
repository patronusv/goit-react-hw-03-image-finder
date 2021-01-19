import React, { useEffect } from 'react';
const Modal = ({ largeImageUrl, largeImageAlt, onCloseModal }) => {
  const onEscDown = e => {
    console.log(e);
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };
  const onBackdropClick = e => {
    console.log(e);
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', onEscDown);
    return () => {
      window.removeEventListener('keydown', onEscDown);
      return () => document.querySelector('.Overlay').removeEventListener('click', onBackdropClick);
    };
  });
  useEffect(() => {
    document.querySelector('.Overlay').addEventListener('click', onBackdropClick);
    return () => {
      window.removeEventListener('keydown', onEscDown);
      return () => document.querySelector('.Overlay').removeEventListener('click', onBackdropClick);
    };
  });

  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={largeImageUrl} alt={largeImageAlt} />
      </div>
    </div>
  );
};

export default Modal;
