import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList {...props} />
    </div>
  )
}

export default TopNavigation;