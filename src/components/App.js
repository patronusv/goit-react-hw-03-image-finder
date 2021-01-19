import React, { useState, useEffect } from 'react';
import fetchPhotos from '../api/api';
import ImageGallery from './imageGallery/ImageGallery';
import Modal from './modal/Modal';
import SearchBar from './searchBar/SearchBar';
const initialState = {
  images: [],
  page: 1,
  query: '',
  modalIsOpen: false,
  largeImageUrl: '',
  largeImageAlt: '',
};
const App = () => {
  const [state, setState] = useState({ ...initialState });
  useEffect(() => {
    if (state.page > 2) {
      window.scrollBy({
        top:
          document.documentElement.clientHeight - document.querySelector('.Button').clientHeight - document.querySelector('.Searchbar').clientHeight,
        behavior: 'smooth',
      });
    }
  }, [state.page]);
  const getPhotos = async (query, page = 1) => {
    if (query === '') {
      return;
    }
    const result = await fetchPhotos(query, page);
    setState(prevState => ({ ...prevState, images: [...result.data.hits], page: 2, query: query }));
  };
  const loadMore = async () => {
    const { query, page } = state;
    const result = await fetchPhotos(query, page);
    setState(prevState => ({ ...prevState, images: [...prevState.images, ...result.data.hits], page: prevState.page + 1 }));
  };
  const openInModal = e => {
    if (e.target.nodeName !== 'IMG') return;
    setState(prevState => ({ ...prevState, largeImageUrl: e.target.dataset.largeimageurl, largeImageAlt: e.target.alt, modalIsOpen: true }));
  };
  const closeModal = e => {
    setState(prevState => ({ ...prevState, largeImageUrl: '', largeImageAlt: '', modalIsOpen: false }));
  };
  const { images } = state;
  return (
    <div>
      <SearchBar onSubmit={getPhotos} />
      <ImageGallery images={images} openInModal={openInModal} />
      {images.length > 0 && (
        <button onClick={loadMore} className="Button">
          Load more
        </button>
      )}
      {state.modalIsOpen && <Modal largeImageUrl={state.largeImageUrl} largeImageAlt={state.largeImageAlt} onCloseModal={closeModal} />}
    </div>
  );
};

export default App;
