import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  console.log(props);
  return (
    <div className="home-route">
      <TopNavigationBar {...props.topics} />
      <PhotoList {...props.photos} />
    </div>
  );
};

export default HomeRoute;
