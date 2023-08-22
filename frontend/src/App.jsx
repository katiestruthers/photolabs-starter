import React, { useState } from 'react';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  // Photo details modal state
  const [click, setClick] = useState(false);
  const clickHandling = () => setClick(!click);

  const homeData = {
    photos: { ...photos },
    topics: { ...topics },
    clickHandling
  }

  return (
    <div className="App">
      <HomeRoute {...homeData}/>
      {click && <PhotoDetailsModal clickHandling={clickHandling}/>}
    </div>
  );
};

export default App;
