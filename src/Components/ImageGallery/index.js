import React from 'react';
import './styles.scss';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem items={items} openModal={openModal} />
    </ul>
  );
};

export default ImageGallery;
