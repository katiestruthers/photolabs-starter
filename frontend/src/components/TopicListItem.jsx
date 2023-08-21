import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" key={props.id}>
      <p>{props.title}</p>
    </div>
  );
};

export default TopicListItem;
