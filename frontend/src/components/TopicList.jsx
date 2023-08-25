import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
import FavBadge from './FavBadge';
import objectToArray from 'helpers/objectToArray';

const TopicList = (props) => {
  const propsArray = objectToArray(props.topics);
  const topicList = propsArray.map((topic) => {
    return (
      <span key={topic.id}>
        <TopicListItem
          key={topic.id}
          title={topic.title}
          slug={topic.slug} 
        />
      </span>
    )
  });
  
  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
      <FavBadge favPhotoExists={props.favPhotoExists}/>
    </div>
  );
};

export default TopicList;
