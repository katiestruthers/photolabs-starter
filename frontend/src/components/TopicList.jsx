import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import FavBadge from './FavBadge';

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  const topicList = sampleDataForTopicList.map((topic) => {
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
