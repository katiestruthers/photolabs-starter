import React, { useState } from 'react';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import objectToArray from "helpers/objectToArray";


const App = () => {
  // Photo details modal state
  const [photo, setPhoto] = useState(null);
  const photoHandling = (currentPhoto) => {
    return setPhoto(currentPhoto);
  }

  // Top nav bar like notification tracker
  const [favPhoto, setFavPhoto] = useState(false);
  const notifHandler = () => setFavPhoto(!favPhoto);

  // Create like useStates for each picture
  for (const key in photos) {
    const [like, setLike] = useState(false);
    const likeHandler = () => {
      notifHandler();
      return setLike(!like);
    }
   photos[key].likedByKey = { like, likeHandler };

    // Set same useStates for similar photos
    for (const key2 in photos) {
      const similarPhotosArray = objectToArray(photos[key2].similar_photos);

      for (const photo of similarPhotosArray) {
        if (Number(photo.id) === Number(key) + 1) {
          photos[key2].similar_photos[`photo${photo.id}`].likedByKey = { like, likeHandler };
        }
      }
    }
  }

  const homeData = {
    photos: { ...photos },
    topics: { ...topics },
    photoHandling,
    favPhotoExists: favPhoto
  }

  return (
    <div className="App">
      <HomeRoute {...homeData}/>
      {photo && <PhotoDetailsModal {...photo}/>}
    </div>
  );
};

export default App;
