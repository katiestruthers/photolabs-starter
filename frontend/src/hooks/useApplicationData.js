import { useState } from 'react';
import photos from '../mocks/photos';
import objectToArray from "helpers/objectToArray";

const useApplicationData = () => {
    // Photo details modal state
  const [photo, setPhoto] = useState(null);
  const photoHandler = (currentPhoto) => setPhoto(currentPhoto);

  // Create default likes object
  const likesObj = {};
  for (const key in photos) {
    likesObj[key] = false;
  }

  // Track like useStates for each picture in object
  const [likes, setLikes] = useState(likesObj);
  const updateToFavPhotosIds = (id) => {
    likes[id] = !likes[id];
    const newLikes = {...likes};
    setLikes(newLikes);
    notifHandler();
  }

  // Track if there is a currently favourited photo
  const [favPhoto, setFavPhoto] = useState(false);
  const notifHandler = () => {
    if (Object.values(likes).includes(true)) {
      setFavPhoto(true);
    } else {
      setFavPhoto(false);
    }
  }

  // Return keys
  const state = { photo: photo, photos: photos, likes: likes, favPhoto: favPhoto };
  const setPhotoSelected = (currentPhoto) => photoHandler(currentPhoto);
  const onClosePhotoDetailsModal = () => photoHandler(null);

  return ({ 
    state, 
    updateToFavPhotosIds, 
    setPhotoSelected, 
    onClosePhotoDetailsModal
  });
}

export default useApplicationData;