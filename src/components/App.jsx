import { StyledApp } from 'App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import React, { Component } from 'react';
import { getGallery } from 'helpers/PixabayAPI';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    loading: false,
    gallery: [],
    isOpen: false,
    page: 1,
    per_page: 12,
    q: '',
    currentImg: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const { page, per_page, q } = this.state;
      await this.fetchData(page, per_page, q);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  }
  async componentDidUpdate(_, prevState) {
    const { page, per_page, q } = this.state;
    if (prevState.page !== page || prevState.q !== q) {
      this.setState({ loading: true });
      try {
        await this.fetchData(page, per_page, q);
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  fetchData = async (page, per_page, q) => {
    const { hits } = await getGallery({ page, per_page, q });
    if (hits) {
      this.setState(prev => ({ gallery: [...prev.gallery, ...hits] }));
    }
  };
  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + this.state.per_page }));
  };
  handleOpenModal = img => {
    this.setState(prev => ({ isOpen: !prev.isOpen, currentImg: img }));
  };
  handleChangeQuery = str => {
    this.setState({ q: str, gallery: [] });
  };
  closeModal = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { loading, isOpen, gallery, currentImg } = this.state;
    return (
      <>
        <StyledApp>
          <Searchbar onChangeQuery={this.handleChangeQuery} />

          {loading && !gallery.length ? (
            <Loader />
          ) : (
            <ImageGallery
              data={gallery}
              handleOpenModal={this.handleOpenModal}
            />
          )}
          {isOpen && <Modal close={this.closeModal} currentImg={currentImg} />}
        </StyledApp>
        <Button title="Load More" onLoadMore={this.onLoadMore} />
      </>
    );
  }
}
