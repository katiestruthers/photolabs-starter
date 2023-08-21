import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [like, setLike] = useState(false);
  const clickHandler = () => { setLike(!like) };

  return (
    <div className="photo-list__fav-icon" onClick={clickHandler}>
      <div className="photo-list__fav-icon-svg heart">
        { like ? <i className="fa-solid fa-heart" style={{color: 'red'}} /> : <i className="fa-regular fa-heart" style={{color: 'red'}} /> }
      </div>
    </div>
  );
}

export default PhotoFavButton;