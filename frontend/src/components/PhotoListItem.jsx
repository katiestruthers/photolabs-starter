import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  console.log(props);

  return (
    <div>
      <img src={props.imageSource}/>
      <img src={props.profile}/>
      <p>{props.username}</p>
      <p>{props.city}, {props.country}</p>
    </div>
  );
};

export default PhotoListItem;
