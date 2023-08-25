import React, { useCallback, useState } from 'react';
import '../styles/PhotoFavButton.scss';
import FavIcon from './FavIcon';

function PhotoFavButton(props) {
  const id = Number(props.photo.id) - 1;
  const like = props.likes[id];

  return (
    <div className="photo-list__fav-icon" onClick={() => props.updateToFavPhotosIds(id)}>
      <div className="photo-list__fav-icon-svg heart">
        { like ? <FavIcon selected={like} /> : <FavIcon selected={like} /> }
      </div>
    </div>
  );
}

export default PhotoFavButton;