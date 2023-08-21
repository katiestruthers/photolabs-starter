import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img src={props.imageSource} className="photo-list__image"/>
      <div className="photo-list__user-details">
        <img src={props.profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info">
          <p style={{margin: '0px'}}>{props.username}</p>
          <p style={{margin: '0px'}} className="photo-list__user-location">{props.city}, {props.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
