import React, { useCallback, useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton(props) {
  const { like, clickHandler } = props.likedByKey;

  return (
    <div className="photo-list__fav-icon" onClick={clickHandler}>
      <div className="photo-list__fav-icon-svg heart">
        { like ? <FavIcon selected={like} /> : <FavIcon selected={like} /> }
      </div>
    </div>
  );
}

export default PhotoFavButton;