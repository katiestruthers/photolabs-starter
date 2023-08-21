import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import FavBadge from './FavBadge';

const TopicList = (props) => {
  // Convert props object into an array
  const propsArray = Object.keys(props).map((property) => {
    return props[property];
  })

  const topicList = propsArray.map((topic) => {
    return (
      <span key={topic.id}>
        <TopicListItem
          id={topic.id}
          title={topic.title} 
        />
      </span>
    )
  });
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
      <FavBadge />
    </div>
  );
};

export default TopicList;
