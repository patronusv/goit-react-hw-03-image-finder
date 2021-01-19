import React, { useState, useEffect, useCallback } from 'react';
const Modal = ({ largeImageUrl, largeImageAlt, onCloseModal }) => {
  const [modalShown, setModalShown] = useState(true);
  const onEscDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        setModalShown(false);
        onCloseModal();
      }
    },
    [setModalShown, onCloseModal],
  );
  useEffect(() => {
    if (modalShown) {
      window.addEventListener('keydown', onEscDown);
    } else {
      window.removeEventListener('keydown', onEscDown);
    }

    return () => window.removeEventListener('keydown', onEscDown);
  }, [modalShown, onEscDown]);

  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={largeImageUrl} alt={largeImageAlt} />
      </div>
    </div>
  );
};

export default Modal;
