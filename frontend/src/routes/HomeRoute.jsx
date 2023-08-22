import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';
import objectToArray from "helpers/objectToArray";

const HomeRoute = (props) => {
  const photoData = {photos: {...props.photos}, photoHandling: props.photoHandling};
  const navData = {topics: {...props.topics}};

  // Notification tracker
  const [favPhoto, setFavPhoto] = useState(false);
  const notifHandler = () => setFavPhoto(!favPhoto);
  navData.favPhotoExists = favPhoto;

  // Create like useStates for each picture
  for (const key in photoData.photos) {
    const [like, setLike] = useState(false);
    const likeHandler = () => {
      notifHandler();
      return setLike(!like);
    }
    photoData.photos[key].likedByKey = { like, likeHandler };

    // Set same useStates for similar photos
    for (const key2 in photoData.photos) {
      const similarPhotosArray = objectToArray(photoData.photos[key2].similar_photos);
      for (const photo of similarPhotosArray) {
        if (photo.id === key) {
          photoData.photos[key].similar_photos[`photo${key}`].likedByKey = { like, likeHandler };
        }
      }
    }
  }

  return (
    <div className="home-route">
      <TopNavigationBar {...navData} />
      <PhotoList {...photoData} />
    </div>
  );
};

export default HomeRoute;
