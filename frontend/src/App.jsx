import React from 'react';
import './App.scss';
import PhotoList from './components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      <TopNavigationBar />
      <PhotoList
        id={sampleDataForPhotoListItem.id}
        city={sampleDataForPhotoListItem.location.city}
        country={sampleDataForPhotoListItem.location.country}
        imageSource={sampleDataForPhotoListItem.imageSource}
        username={sampleDataForPhotoListItem.username}
        profile={sampleDataForPhotoListItem.profile}
      />
    </div>
  );
};

export default App;
