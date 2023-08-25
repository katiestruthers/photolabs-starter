import { useState } from 'react';
import photos from '../mocks/photos';
import objectToArray from "helpers/objectToArray";

const useApplicationData = () => {
    // Photo details modal state
  const [photo, setPhoto] = useState(null);
  const photoHandling = (currentPhoto) => setPhoto(currentPhoto);

  // Create likes object to track notifications
  const likes = {};
  
  // Create like useStates for each picture
  const updateToFavPhotosIds = () => {
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

  // Return keys
  const state = { photo: photo, photos: photos, likes: likes, favPhoto: favPhoto };
  const setPhotoSelected = (currentPhoto) => photoHandling(currentPhoto);
  const onClosePhotoDetailsModal = () => photoHandling(null);

  return ({ 
    state, 
    updateToFavPhotosIds, 
    setPhotoSelected, 
    onClosePhotoDetailsModal
  });
}

export default useApplicationData;