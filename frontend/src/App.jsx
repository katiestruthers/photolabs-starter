import React from 'react';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import HomeRoute from 'routes/HomeRoute';

const App = () => {
  const data = {
    photos: { ...photos },
    topics: { ...topics }
  }

  return (
    <div className="App">
      <HomeRoute {...data}/>
    </div>
  );
};

export default App;
