import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const photoData = {photos: {...props.photos}};
  const navData = {topics: {...props.topics}};

  // Notification tracker
  const [favPhoto, setFavPhoto] = useState(false);
  const notifHandler = () => setFavPhoto(!favPhoto);
  navData.favPhotoExists = favPhoto;

  // Create like useStates for each picture
  for (const key in photoData.photos) {
    const [like, setLike] = useState(false);
    const clickHandler = () => {
      notifHandler();
      return setLike(!like);
    }
    photoData.photos[key].likedByKey = { like, clickHandler };
  }

  return (
    <div className="home-route">
      <TopNavigationBar {...navData} />
      <PhotoList {...photoData} />
    </div>
  );
};

export default HomeRoute;
