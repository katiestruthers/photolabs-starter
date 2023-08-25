import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const photoData = {
    photos: {...props.photos}, 
    setPhotoSelected: props.setPhotoSelected,
    updateToFavPhotosIds: props.updateToFavPhotosIds,
    likes: props.likes
  };

  const navData = {
    topics: {...props.topics}, 
    favPhotoExists: props.favPhotoExists
  };

  return (
    <div className="home-route">
      <TopNavigationBar {...navData} />
      <PhotoList {...photoData} />
    </div>
  );
};

export default HomeRoute;
