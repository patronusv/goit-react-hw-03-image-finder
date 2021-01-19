import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import fetchPhotos from '../api/api';
import AppStyled from './AppStyled';
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
  error: null,
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
  const resetError = () => {
    setState(prevState => ({ ...prevState, error: '' }));
  };
  const getPhotos = async (query, page = 1) => {
    try {
      if (query === '') {
        return;
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      resetError();
      setState(prevState => ({ ...prevState, isLoading: true }));
      const result = await fetchPhotos(query, page);
      setState(prevState => ({ ...prevState, images: [...result.data.hits], page: 2, query: query, isLoading: false }));
    } catch (error) {
      setState(prevState => ({ ...prevState, error: error }));
    }
  };

  const loadMore = async () => {
    try {
      resetError();
      const { query, page } = state;
      setState(prevState => ({ ...prevState, isLoading: true }));
      const result = await fetchPhotos(query, page);
      setState(prevState => ({ ...prevState, images: [...prevState.images, ...result.data.hits], page: prevState.page + 1, isLoading: false }));
    } catch (error) {
      setState(prevState => ({ ...prevState, error: error }));
    }
  };

  const openInModal = e => {
    if (e.target.nodeName !== 'IMG') return;
    setState(prevState => ({ ...prevState, largeImageUrl: e.target.dataset.largeimageurl, largeImageAlt: e.target.alt, modalIsOpen: true }));
  };

  const closeModal = e => {
    setState(prevState => ({ ...prevState, largeImageUrl: '', largeImageAlt: '', modalIsOpen: false }));
  };

  const { images, isLoading, modalIsOpen, largeImageUrl, largeImageAlt } = state;
  return (
    <AppStyled>
      <SearchBar onSubmit={getPhotos} />
      {isLoading && (
        <div className="loader-wrapper">
          <Loader type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
        </div>
      )}
      <ImageGallery images={images} openInModal={openInModal} />
      {images.length > 0 && <Button onBtnClick={loadMore} title="Load more" />}
      {modalIsOpen && <Modal largeImageUrl={largeImageUrl} largeImageAlt={largeImageAlt} onCloseModal={closeModal} />}
    </AppStyled>
  );
};

export default App;
