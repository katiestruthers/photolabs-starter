import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ favPhotoExists }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!favPhotoExists} />
    </div>
  ) 
};

export default FavBadge;