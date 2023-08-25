import React, { useState } from 'react';
import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import objectToArray from "helpers/objectToArray";
import useApplicationData from 'hooks/useApplicationData';


const App = () => {
  const { state, setPhotoSelected, onClosePhotoDetailsModal } = useApplicationData();

  // Create likes object to track notifications
  const likes = {};
  
  // Create like useStates for each picture
  for (const key in photos) {
    const [like, setLike] = useState(false);
    const likeHandler = (id) => {
      notifHandler(id, !like);
      setLike(!like);
    }
    likes[key] = like;

  // Set like useState to associated photo
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

  const [favPhoto, setFavPhoto] = useState(false);
  const notifHandler = (id, like) => {
    likes[id] = like;
    if (Object.values(likes).includes(true)) {
      setFavPhoto(true);
    } else {
      setFavPhoto(false);
    }
  }

  const homeData = {
    photos: { ...state.photos },
    topics: { ...topics },
    setPhotoSelected,
    favPhotoExists: favPhoto
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
