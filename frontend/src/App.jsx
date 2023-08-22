import React, { useState } from 'react';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  // Photo details modal state
  const [photo, setPhoto] = useState(null);
  const photoHandling = (currentPhoto) => {
    return setPhoto(currentPhoto);
  }

  const homeData = {
    photos: { ...photos },
    topics: { ...topics },
    photoHandling
  }

  return (
    <div className="App">
      <HomeRoute {...homeData}/>
      {photo && <PhotoDetailsModal {...photo}/>}
    </div>
  );
};

export default App;
