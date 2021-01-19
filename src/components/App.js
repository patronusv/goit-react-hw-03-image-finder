import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import fetchPhotos from '../api/api';
import Button from './button/Button';
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
  isLoading: false,
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
    setState(prevState => ({ ...prevState, isLoading: true }));
    const result = await fetchPhotos(query, page);
    setState(prevState => ({ ...prevState, images: [...result.data.hits], page: 2, query: query, isLoading: false }));
  };
  const loadMore = async () => {
    const { query, page } = state;
    setState(prevState => ({ ...prevState, isLoading: true }));
    const result = await fetchPhotos(query, page);
    setState(prevState => ({ ...prevState, images: [...prevState.images, ...result.data.hits], page: prevState.page + 1, isLoading: false }));
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
    <div style={{ display: 'block', margin: '0 auto', width: '100%' }}>
      <SearchBar onSubmit={getPhotos} />
      {state.isLoading && (
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
        </div>
      )}
      <ImageGallery images={images} openInModal={openInModal} />
      {images.length > 0 && <Button onBtnClick={loadMore} title="Load more" />}
      {state.modalIsOpen && <Modal largeImageUrl={state.largeImageUrl} largeImageAlt={state.largeImageAlt} onCloseModal={closeModal} />}
    </div>
  );
};

export default App;
