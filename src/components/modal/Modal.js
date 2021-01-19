import React, { useEffect } from 'react';
import ModalWrapper from './ModalStyled';
const Modal = ({ largeImageUrl, largeImageAlt, onCloseModal }) => {
  const onEscDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };
  const onBackdropClick = e => {
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
    <ModalWrapper className="Overlay">
      <div className="Modal">
        <img src={largeImageUrl} alt={largeImageAlt} />
      </div>
    </ModalWrapper>
  );
};

export default Modal;
