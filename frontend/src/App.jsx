import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const { state, dispatch, ACTIONS } = useApplicationData();

  const homeData = {
    photos: { ...state.photos },
    topics: { ...state.topics },
    likes: state.likes,
    favPhotoExists: state.favPhoto,
    topic: state.topic,
    dispatch,
    ACTIONS
  }

  const photoDetailsModalData ={
    photo: { ...state.photo },
    likes: state.likes,
    dispatch,
    ACTIONS
  }

  return (
    <div className="App">
      <HomeRoute {...homeData}/>
      {state.photo && <PhotoDetailsModal {...photoDetailsModalData}/>}
    </div>
  );
};

export default App;
