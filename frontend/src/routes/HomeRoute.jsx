import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const photoData = {photos: {...props.photos}, setPhotoSelected: props.setPhotoSelected};
  const navData = {topics: {...props.topics}, favPhotoExists: props.favPhotoExists};

  return (
    <div className="home-route">
      <TopNavigationBar {...navData} />
      <PhotoList {...photoData} />
    </div>
  );
};

export default HomeRoute;
