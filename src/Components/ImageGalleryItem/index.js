import React from 'react';
import './styles.scss';

const ImageGalleryItem = ({ items, openModal }) => {
  const modalOpener = e => {
    openModal(e.target.dataset.large);
  };

  return items.map(el => {
    return (
      <li key={el.id} className="ImageGalleryItem">
        <img
          onClick={modalOpener}
          data-large={el.largeImageURL}
          src={el.webformatURL}
          alt={el.tags}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
