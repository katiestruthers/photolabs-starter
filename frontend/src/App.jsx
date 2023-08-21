import React from 'react';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoList from './components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const App = () => {
  return (
    <div className="App">
      <TopNavigationBar {...topics} />
      <PhotoList {...photos} />
    </div>
  );
};

export default App;
