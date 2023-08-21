import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const photoData = {...props.photos};
  
  // Create like useStates for each picture
  for (const key in photoData) {
    const [like, setLike] = useState(false);
    const clickHandler = () => { setLike(!like) };
    photoData[key].likedByKey = {
      like,
      setLike,
      clickHandler
    };
  }

  return (
    <div className="home-route">
      <TopNavigationBar {...props.topics} />
      <PhotoList {...photoData} />
    </div>
  );
};

export default HomeRoute;
