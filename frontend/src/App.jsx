import React, { useState } from 'react';
import './App.scss';
import topics from './mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { 
    state, 
    setPhotoSelected, 
    onClosePhotoDetailsModal, 
    updateToFavPhotosIds 
  } = useApplicationData();

  const homeData = {
    photos: { ...state.photos },
    topics: { ...topics },
    setPhotoSelected,
    updateToFavPhotosIds,
    likes: state.likes,
    favPhotoExists: state.favPhoto
  }

  const photoDetailsModalData ={
    photo: { ...state.photo },
    onClosePhotoDetailsModal
  }

  return (
    <div className="App">
      <HomeRoute {...homeData}/>
      {state.photo && <PhotoDetailsModal {...photoDetailsModalData}/>}
    </div>
  );
};

export default App;
