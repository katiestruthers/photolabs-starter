import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { regular } = props.photo.urls;
  const photoData = {photos: {...props.photo.similar_photos}, photoHandling: null};

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={props.onClosePhotoDetailsModal}/>
      </button>
      <section className="photo-details-modal__images">
        <img src={regular} className="photo-details-modal__image" />
        <header className="photo-details-modal__header">Similar Photos</header>
        <PhotoList {...photoData} />
      </section>
    </div>
  )
};

export default PhotoDetailsModal;