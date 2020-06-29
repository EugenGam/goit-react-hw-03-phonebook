import React, { Component } from 'react';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Loader from './Components/Loader';
import Button from './Components/Button';
import './sass/main.scss';
import './styles.scss';
import axios from 'axios';
import Modal from './Components/Modal';

let perPage = 12;
const apiKey = '16377797-6d9ebd48227d507be381d4be6';
let ScrollHeight = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      find: '',
      isLoading: false,
      items: [],
      modalIsVisible: false,
      modalImage: '',
    };
  }
  handleSubmit = (finder, e) => {
    e.preventDefault();
    this.setState({ find: finder, items: [] });
  };

  apiService = () => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.find}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
      )
      .then(response => this.setState({ items: response.data.hits }))
      .catch(error => console.error(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleOpen = largeImage => {
    this.setState({ modalIsVisible: true, modalImage: largeImage });
  };

  handleClose = () => {
    this.setState({ modalIsVisible: false });
  };

  componentDidUpdate() {
    const { find, items, isLoading } = this.state;
    if (find !== '' && items.length === 0 && !isLoading) {
      perPage = 12;
      this.apiService();
    }
    if (items.length > 12) {
      window.scrollTo({
        top: ScrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handeFindMore = () => {
    perPage += perPage;
    ScrollHeight = document.documentElement.scrollHeight - 140;
    this.apiService();
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          className="ImageGallery"
          items={this.state.items}
          openModal={this.handleOpen}
        />
        {this.state.isLoading && <Loader />}
        {this.state.items.length > 0 && (
          <Button findMore={this.handeFindMore} />
        )}
        {this.state.modalIsVisible && (
          <Modal url={this.state.modalImage} closeModal={this.handleClose} />
        )}
      </>
    );
  }
}

export default App;
