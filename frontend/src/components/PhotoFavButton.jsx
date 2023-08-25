import React, { useCallback, useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton(props) {
  const { like, likeHandler } = props.photo.likedByKey;

  return (
    <div className="photo-list__fav-icon" onClick={() => likeHandler(Number(props.photo.id) - 1)}>
      <div className="photo-list__fav-icon-svg heart">
        { like ? <FavIcon selected={like} /> : <FavIcon selected={like} /> }
      </div>
    </div>
  );
}

export default PhotoFavButton;