import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const photoData = {
    photos: {...props.photos}, 
    likes: props.likes,
    dispatch: props.dispatch,
    ACTIONS: props.ACTIONS
  };

  const navData = {
    topics: {...props.topics}, 
    topic: props.topic,
    favPhotoExists: props.favPhotoExists,
    dispatch: props.dispatch,
    ACTIONS: props.ACTIONS
  };

  return (
    <div className="home-route">
      <TopNavigationBar {...navData} />
      <PhotoList {...photoData} />
    </div>
  );
};

export default HomeRoute;
